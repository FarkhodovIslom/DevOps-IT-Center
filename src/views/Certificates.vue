<template>
  <div class="certificates-container">
    <div class="content-wrapper section-breathing">
      <!-- Main Title -->
      <div class="main-title">
        <h1 class="title-primary">Bitiruv sertifikatingizni</h1>
        <h2 class="title-secondary"><span class="font-bold text-black">tekshirish</span> va <span class="font-bold text-black">yuklab olish</span></h2>
      </div>

      <!-- Search Form -->
      <div class="search-section">
        <div class="search-card">
          <form @submit.prevent="searchCertificates" class="search-form">
            <div class="input-group">
              <div class="input-wrapper">
                <input
                  v-model="searchForm.firstName"
                  type="text"
                  placeholder="Ismingiz"
                  class="search-input"
                />
              </div>
              <div class="input-wrapper">
                <input
                  v-model="searchForm.lastName"
                  type="text"
                  placeholder="Familiyangiz"
                  class="search-input"
                />
              </div>
              <div class="input-wrapper">
                <input
                  v-model="searchForm.certificateId"
                  type="text"
                  placeholder="Sertifikat ID (msln: DIC001300)"
                  class="search-input"
                />
              </div>
            </div>
            <button
              type="submit"
              :disabled="loading || !isFormValid"
              class="btn-royal search-btn"
            >
              <div v-if="loading" class="loading-spinner"></div>
              <template v-else>
                <SearchIcon class="btn-icon" />
                <span>Sertifikatni qidirish</span>
              </template>
            </button>
          </form>
        </div>
      </div>

      <!-- Error State -->
      <div v-if="error" class="error-container">
        <div class="error-message">
          <h3>Xatolik yuz berdi</h3>
          <p>{{ error }}</p>
          <button @click="clearError" class="retry-button">Qayta qidirish</button>
        </div>
      </div>

      <!-- Results Section -->
      <div v-if="certificates.length > 0" class="results-section">
        <h3 class="results-title">Topilgan sertifikatlar ({{ certificates.length }})</h3>
        <div class="results-grid">
          <div
            v-for="cert in certificates"
            :key="cert.certificate_id || cert.id"
            class="result-card"
          >
            <div class="result-header">
              <div class="result-id">
                <AwardIcon class="result-icon" />
                <span class="id-text">{{ cert.certificate_id || cert.id || 'N/A' }}</span>
              </div>
              <div class="result-actions">
                <button @click="viewCertificate(cert)" class="action-btn view-btn" title="Ko'rish">
                  <EyeIcon class="action-icon" />
                </button>
                <a 
                  v-if="cert.certificate_url"
                  :href="cert.certificate_url" 
                  :download="`certificate_${cert.certificate_id || cert.id}.pdf`"
                  class="action-btn download-btn" 
                  title="Yuklab olish"
                  target="_blank"
                >
                  <DownloadIcon class="action-icon" />
                </a>
                <button 
                  v-else
                  @click="showNoUrlAlert(cert)"
                  class="action-btn download-btn disabled" 
                  title="Yuklab olish"
                >
                  <DownloadIcon class="action-icon" />
                </button>
              </div>
            </div>

            <h4 class="result-name">{{ getFullName(cert) }}</h4>
            <p class="result-course">{{ cert.course_name || 'Kurs nomi topilmadi' }}</p>
            
            <div class="result-footer">
              <p v-if="cert.created_at" class="result-date">
                <CalendarIcon class="date-icon" />
                <span>{{ formatDate(cert.created_at) }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-else-if="searchAttempted && !loading && !error" class="no-results">
        <FileSearchIcon class="no-results-icon" />
        <h3 class="no-results-title">Sertifikat topilmadi</h3>
        <p class="no-results-subtitle">Ism, Familiya va IDni to'g'ri kiriting</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Search as SearchIcon,
  Download as DownloadIcon,
  FileSearch as FileSearchIcon,
  Award as AwardIcon,
  Calendar as CalendarIcon,
  Eye as EyeIcon
} from 'lucide-vue-next'

const searchForm = ref({
  firstName: '',
  lastName: '',
  certificateId: ''
})

const certificates = ref([])
const loading = ref(false)
const error = ref(null)
const searchAttempted = ref(false)

const API_BASE = import.meta.env.VITE_API_BASE_URL

const isFormValid = computed(() => {
  const { firstName, lastName, certificateId } = searchForm.value
  return firstName.trim() && lastName.trim() && certificateId.trim()
})

const fullName = computed(() => {
  const { firstName, lastName } = searchForm.value
  return `${lastName.trim()} ${firstName.trim()}`
})

const searchCertificates = async () => {
  if (!isFormValid.value) return

  loading.value = true
  error.value = null
  searchAttempted.value = true
  certificates.value = []

  try {
    const params = new URLSearchParams({
      fullname: fullName.value,
      certificate_id: searchForm.value.certificateId.trim()
    })
    
    const response = await fetch(`${API_BASE}/api/certificates/?${params}`, {
      headers: { 'Accept': 'application/json' }
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    certificates.value = Array.isArray(data) ? data : data ? [data] : []

  } catch (err) {
    console.error('Search error:', err)
    error.value = `Kiritilgan ma'lumotlarga mos keladigan sertifikat topilmadi`
  } finally {
    loading.value = false
  }
}

const viewCertificate = (cert) => {
  if (cert.certificate_url) {
    window.open(cert.certificate_url, '_blank')
  } else {
    alert('Sertifikat URL topilmadi')
  }
}

const showNoUrlAlert = (cert) => {
  const certId = cert.certificate_id || cert.id
  const certName = getFullName(cert)
  alert(`Sertifikat URL topilmadi: ${certId} - ${certName}`)
}

const getFullName = (cert) => {
  const firstName = cert.first_name || ''
  const lastName = cert.last_name || ''
  return `${firstName} ${lastName}`.trim() || 'Noma\'lum'
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  try {
    return new Date(dateString).toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: '2-digit', 
      day: '2-digit'
    })
  } catch {
    return dateString
  }
}

const clearError = () => {
  error.value = null
}
</script>

<style scoped>
* {
  transition: all 0.25s cubic-bezier(0.86, 0, 0.07, 1);
}

.certificates-container {
  min-height: calc(100vh - 64px);
  background-color: var(--bg-light);
  font-family: var(--font);
}

.content-wrapper {
  max-width: var(--content-max);
  margin: 0 auto;
}

.main-title {
  text-align: center;
  margin-bottom: 4rem;
}

.title-primary {
  font-size: var(--text-title);
  font-weight: var(--weight-bold);
  color: var(--gray-muted);
  margin-bottom: 0.5rem;
  letter-spacing: var(--tracking-display);
}

.title-secondary {
  font-size: var(--text-title);
  font-weight: var(--weight-thin);
  color: var(--gray-muted);
  letter-spacing: var(--tracking-display);
}

.font-bold { font-weight: var(--weight-bold); }
.text-black { color: var(--black); }

.search-section {
  margin-bottom: 3rem;
}

.search-card {
  background: var(--white);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--gray-light);
  max-width: 900px;
  margin: 0 auto;
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 1rem;
}

.input-wrapper {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 1.25rem;
  border: 1px solid var(--gray-light);
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--bg-light);
  color: var(--black);
}

.search-input:focus {
  outline: none;
  border-color: var(--royal-blue);
  background: var(--white);
}

.search-input::placeholder {
  color: var(--gray-muted);
}

.search-btn {
  width: 100%;
  padding: 1.25rem 2rem;
  border-radius: 0.75rem;
  margin-top: 1rem;
}

.search-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.results-section {
  margin-top: 4rem;
}

.results-title {
  color: var(--black);
  font-size: 1.75rem;
  font-weight: var(--weight-bold);
  margin-bottom: 2rem;
  text-align: center;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.result-card {
  background: var(--white);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid var(--gray-light);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
}

.result-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.result-id {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.result-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--royal-blue);
}

.id-text {
  font-weight: var(--weight-bold);
  color: var(--black);
  font-size: 1rem;
}

.result-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  padding: 0.75rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  color: var(--black);
  transition: all 0.2s ease;
}

.action-btn:hover {
  background: var(--royal-blue);
  color: var(--white);
}

.action-icon {
  width: 1.125rem;
  height: 1.125rem;
}

.result-name {
  font-size: 1.25rem;
  font-weight: var(--weight-bold);
  color: var(--black);
  margin-bottom: 0.5rem;
}

.result-course {
  color: var(--gray-mid);
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.result-footer {
  border-top: 1px solid var(--gray-light);
  padding-top: 1.5rem;
}

.result-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-mid);
  font-size: 0.9rem;
}

.date-icon {
  width: 1rem;
  height: 1rem;
  color: var(--royal-blue);
}

.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
}

.error-message {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  color: var(--black);
}

.error-message h3 {
  color: #ef4444;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.retry-button {
  background: var(--black);
  color: var(--white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;
  margin-top: 1.5rem;
  font-weight: var(--weight-bold);
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--black);
}

.no-results-icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  color: var(--gray-light);
}

.no-results-title {
  font-size: 1.5rem;
  font-weight: var(--weight-bold);
  margin-bottom: 0.5rem;
}

.no-results-subtitle {
  color: var(--gray-mid);
}

@media (max-width: 768px) {
  .input-group {
    grid-template-columns: 1fr;
  }
}
</style>