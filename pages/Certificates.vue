
<template>
  <div class="certificates-container">
    <!-- Background Effects -->
    <div class="bg-effects">
      <div class="bg-circle bg-circle-1"></div>
      <div class="bg-circle bg-circle-2"></div>
      <div class="bg-circle bg-circle-3"></div>
    </div>

    <div class="content-wrapper">
      <!-- Main Title -->
      <div class="main-title">
        <h1 class="title-primary">Bitiruv sertifikatingizni</h1>
        <h2 class="title-secondary"><b>tekshirish</b> va <b>yuklab olish</b></h2>
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
                  placeholder="Sertifikat ID (масалан: DIC001300)"
                  class="search-input"
                />
              </div>
            </div>
            <button
              type="submit"
              :disabled="loading || !isFormValid"
              class="search-btn"
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
                <!-- Optimized link tag for downloading certificate -->
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
                <!-- Agar URL xato bo'sa alert korsatadi! -->
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
        <p class="no-results-subtitle">Ism,Familiya va IDni to'g'ri kiriting</p>
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

// State
const searchForm = ref({
  firstName: '',
  lastName: '',
  certificateId: ''
})

const certificates = ref([])
const loading = ref(false)
const error = ref(null)
const searchAttempted = ref(false)

const API_BASE = 'https://devops-itc.alwaysdata.net'

// Computed
const isFormValid = computed(() => {
  const { firstName, lastName, certificateId } = searchForm.value
  return firstName.trim() && lastName.trim() && certificateId.trim()
})

const fullName = computed(() => {
  const { firstName, lastName } = searchForm.value
  return `${lastName.trim()} ${firstName.trim()}`
})

// Methods
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

// Простая функция для показа алерта когда нет URL
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
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Background Effects */
.bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.bg-circle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: -100px;
  animation-delay: 0s;
}

.bg-circle-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: -50px;
  animation-delay: 2s;
}

.bg-circle-3 {
  width: 150px;
  height: 150px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.content-wrapper {
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.title-primary {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
}

.title-secondary {
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.search-section {
  margin-bottom: 3rem;
}

.search-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.input-wrapper {
  position: relative;
}

.search-input {
  width: 100%;
  padding: 1.25rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  color: #374151;
}

.search-input:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
  background: rgba(255, 255, 255, 1);
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #523aed 0%, #5563f7 100%);
  color: white;
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.search-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #6628d9 0%, #5833ea 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
}

.search-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
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
  margin-top: 3rem;
}

.results-title {
  color: white;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.result-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.result-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
  color: #7c3aed;
}

.id-text {
  font-weight: 700;
  color: #374151;
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
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(124, 58, 237, 0.1);
  color: #7c3aed;
}

.view-btn:hover {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  transform: scale(1.05);
}

.download-btn:hover {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
  color: white;
  transform: scale(1.05);
}

.action-icon {
  width: 1.125rem;
  height: 1.125rem;
}

.result-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 0.75rem;
}

.result-course {
  color: #7c3aed;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.result-footer {
  border-top: 1px solid rgba(124, 58, 237, 0.1);
  padding-top: 1rem;
}

.result-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.date-icon {
  width: 1rem;
  height: 1rem;
  color: #7c3aed;
}

.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  margin: 2rem 0;
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px);
}

.error-message h3 {
  color: #ef4444;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.retry-button {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  font-weight: 600;
}

.retry-button:hover {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  transform: translateY(-2px);
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  color: white;
}

.no-results-icon {
  width: 5rem;
  height: 5rem;
  margin: 0 auto 1.5rem;
  opacity: 0.7;
}

.no-results-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.no-results-subtitle {
  opacity: 0.85;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 1.5rem;
  }
  
  .title-primary {
    font-size: 2rem;
  }
  
  .title-secondary {
    font-size: 1.25rem;
  }
  
  .search-card {
    padding: 2rem;
    border-radius: 1.25rem;
  }
  
  .input-group {
    grid-template-columns: 1fr;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .result-header {
    /* flex-direction: column; */
    align-items: flex-start;
    gap: 1rem;
  }
  
  .result-actions {
    align-self: flex-end;
  }
}

@media (max-width: 480px) {
  .main-title {
    margin-bottom: 2rem;
  }
  
  .title-primary {
    font-size: 1.75rem;
  }
  
  .title-secondary {
    font-size: 1.1rem;
  }
  
  .search-card {
    padding: 1.5rem;
  }
  
  .search-input {
    padding: 1rem;
  }
  
  .search-btn {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
  
  .result-card {
    padding: 1.5rem;
  }
}
</style>