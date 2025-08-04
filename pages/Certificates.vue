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
        <h1 class="title-primary">
          BITIRUV SERTIFIKATINGIZNI
        </h1>
        <h2 class="title-secondary">
          TEKSHIRISH VA YUKLAB OLISH UCHUN
        </h2>
      </div>

      <!-- Quick Search -->
      <div class="quick-search-section">
        <div class="search-card">
          <form @submit.prevent="quickSearch" class="search-form">
            <div class="search-input-wrapper">
              <input
                id="search"
                v-model="searchQuery"
                type="text"
                placeholder="Familiyangiz yoki ismingizni yozing"
                class="search-input"
              />
            </div>
            <button
              type="submit"
              :disabled="loading"
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
          <button @click="retryFetch" class="retry-button">Qayta urinish</button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <div class="content-grid">
          <!-- Search Form -->
          <div class="form-section">
            <div class="form-card">
              <h3 class="form-title">
                <UserIcon class="form-icon" />
                <span>Bitiruvchi ma'lumotlari</span>
              </h3>

              <form @submit.prevent="searchCertificates" class="certificate-form">
                <div class="form-group">
                  <label class="form-label">Familyasi:</label>
                  <input
                    v-model="formData.familiya"
                    type="text"
                    placeholder="Ravshanov"
                    class="form-input"
                    :disabled="loading"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Ismi:</label>
                  <input
                    v-model="formData.ism"
                    type="text"
                    placeholder="Islombek"
                    class="form-input"
                    :disabled="loading"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">ID raqami:</label>
                  <div class="input-with-icon">
                    <HashIcon class="input-icon" />
                    <input
                      v-model="formData.idRaqami"
                      type="text"
                      placeholder="DIC000001"
                      class="form-input with-icon"
                      :disabled="loading"
                    />
                  </div>
                </div>

                <div class="info-box">
                  <p class="info-text">
                    <InfoIcon class="info-icon" />
                    <span>Sertifikatni PDF formatda yuklab olishingiz mumkin</span>
                  </p>
                </div>

                <button
                  type="submit"
                  :disabled="loading"
                  class="submit-btn"
                >
                  <DownloadIcon class="btn-icon" />
                  <span>{{ loading ? 'Qidirilmoqda...' : 'Yuklab olish' }}</span>
                </button>
              </form>
            </div>
          </div>

          <!-- PDF Viewer -->
          <div class="pdf-section">
            <div class="pdf-card">
              <div v-if="selectedCertificate" class="pdf-viewer">
                <div class="pdf-header">
                  <h3 class="pdf-title">{{ selectedCertificate.fullName || selectedCertificate.name || 'Noma\'lum' }} - Sertifikat</h3>
                  <div class="pdf-actions">
                    <button @click="downloadCertificate(selectedCertificate)" class="pdf-download-btn">
                      <DownloadIcon class="btn-icon" />
                      PDF yuklab olish
                    </button>
                    <button @click="viewFullscreen(selectedCertificate)" class="pdf-view-btn">
                      <MaximizeIcon class="btn-icon" />
                      To'liq ko'rish
                    </button>
                  </div>
                </div>
                
                <div class="pdf-placeholder">
                  <div class="pdf-icon-wrapper">
                    <FileTextIcon class="pdf-icon" />
                  </div>
                  <h4 class="pdf-placeholder-title">{{ selectedCertificate.fullName || selectedCertificate.name || 'Noma\'lum' }}</h4>
                  <p class="pdf-placeholder-subtitle">{{ selectedCertificate.course || selectedCertificate.courseName || 'Kurs nomi noma\'lum' }}</p>
                  <div class="pdf-details">
                    <div class="pdf-detail">
                      <span class="detail-label">ID:</span>
                      <span class="detail-value">{{ selectedCertificate.id || selectedCertificate.uuid || 'N/A' }}</span>
                    </div>
                    <div class="pdf-detail" v-if="selectedCertificate.hours">
                      <span class="detail-label">Soat:</span>
                      <span class="detail-value">{{ selectedCertificate.hours }} soat</span>
                    </div>
                    <div class="pdf-detail" v-if="selectedCertificate.year">
                      <span class="detail-label">Yil:</span>
                      <span class="detail-value">{{ selectedCertificate.year }}</span>
                    </div>
                    <div class="pdf-detail" v-if="selectedCertificate.issueDate || selectedCertificate.date">
                      <span class="detail-label">Berilgan:</span>
                      <span class="detail-value">{{ selectedCertificate.issueDate || selectedCertificate.date }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else class="pdf-empty">
                <FileSearchIcon class="empty-icon" />
                <p class="empty-title">Ma'lumotlarni kiriting</p>
                <p class="empty-subtitle">Sertifikat PDF fayli shu yerda ko'rinadi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Results Section -->
      <div v-if="certificates.length > 0" class="results-section">
        <h3 class="results-title">Topilgan sertifikatlar ({{ certificates.length }})</h3>
        <div class="results-grid">
          <div
            v-for="cert in certificates"
            :key="cert.id || cert.uuid"
            @click="selectCertificate(cert)"
            class="result-card"
            :class="{ 'active': selectedCertificate && (selectedCertificate.id === cert.id || selectedCertificate.uuid === cert.uuid) }"
          >
            <div class="result-header">
              <div class="result-id">
                <AwardIcon class="result-icon" />
                <span class="id-text">{{ cert.id || cert.uuid || 'N/A' }}</span>
              </div>
              <button @click.stop="downloadCertificate(cert)" class="result-download">
                <DownloadIcon class="download-icon" />
              </button>
            </div>

            <h4 class="result-name">{{ cert.fullName || cert.name || 'Noma\'lum' }}</h4>
            <p class="result-course">{{ cert.course || cert.courseName || 'Kurs nomi noma\'lum' }}</p>
            <p class="result-meta" v-if="cert.hours || cert.year">
              {{ cert.hours ? cert.hours + ' soat' : '' }}{{ cert.hours && cert.year ? ' • ' : '' }}{{ cert.year || '' }}
            </p>

            <div class="result-footer" v-if="cert.issueDate || cert.date">
              <p class="result-date">
                <CalendarIcon class="date-icon" />
                <span>Berilgan: {{ cert.issueDate || cert.date }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- No Results -->
      <div v-else-if="searchAttempted && !loading" class="no-results">
        <FileSearchIcon class="no-results-icon" />
        <h3 class="no-results-title">Sertifikat topilmadi</h3>
        <p class="no-results-subtitle">Boshqa nom yoki ID bilan qidirib ko'ring</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { 
  Search as SearchIcon,
  User as UserIcon,
  Hash as HashIcon,
  Info as InfoIcon,
  Download as DownloadIcon,
  FileText as FileTextIcon,
  Maximize as MaximizeIcon,
  FileSearch as FileSearchIcon,
  Award as AwardIcon,
  Calendar as CalendarIcon
} from 'lucide-vue-next'

// Reactive data
const searchQuery = ref('')
const certificates = ref([])
const loading = ref(false)
const selectedCertificate = ref(null)
const error = ref(null)
const searchAttempted = ref(false)

const formData = ref({
  familiya: '',
  ism: '',
  idRaqami: ''
})

// Base API URL 
const API_BASE = 'https://devops-itc.alwaysdata.net'

// Methods
const quickSearch = async () => {
  if (!searchQuery.value.trim()) return
  await fetchCertificates(searchQuery.value)
}

const searchCertificates = async () => {
  const query = `${formData.value.familiya} ${formData.value.ism} ${formData.value.idRaqami}`.trim()
  if (!query) return
  await fetchCertificates(query)
}

// Попытка получить конкретный сертификат по UUID
const fetchCertificateByUuid = async (uuid) => {
  try {
    const response = await fetch(`${API_BASE}/api/certificate/${uuid}`)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (err) {
    console.error('Error fetching certificate by UUID:', err)
  }
  return null
}

const fetchCertificates = async (query) => {
  loading.value = true
  error.value = null
  searchAttempted.value = true
  
  try {
    // Сначала пытаемся получить все сертификаты
    const response = await fetch(`${API_BASE}/api/certificates/`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    // Если API вернул пустой ответ или null, используем fallback
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.warn('API returned empty data, using fallback')
      certificates.value = getFallbackCertificates().filter(cert =>
        matchesCertificate(cert, query)
      )
    } else {
      // Фильтруем результаты по поисковому запросу
      const allCertificates = Array.isArray(data) ? data : [data]
      certificates.value = allCertificates.filter(cert => 
        matchesCertificate(cert, query)
      )
    }

    // Если ничего не найдено, пробуем поискать по UUID
    if (certificates.value.length === 0 && query.trim().length > 3) {
      const singleCert = await fetchCertificateByUuid(query.trim())
      if (singleCert) {
        certificates.value = [singleCert]
      }
    }

    if (certificates.value.length > 0) {
      selectedCertificate.value = certificates.value[0]
    } else {
      selectedCertificate.value = null
    }

  } catch (err) {
    console.error('Error fetching certificates:', err)
    error.value = `Sertifikatlarni yuklashda xatolik: ${err.message}`
    
    // Fallback на случай ошибки API
    certificates.value = getFallbackCertificates().filter(cert =>
      matchesCertificate(cert, query)
    )
    
    if (certificates.value.length > 0) {
      selectedCertificate.value = certificates.value[0]
    }
  } finally {
    loading.value = false
  }
}

// Проверяем соответствие сертификата поисковому запросу
const matchesCertificate = (cert, query) => {
  const searchTerm = query.toLowerCase()
  const fullName = (cert.fullName || cert.name || '').toLowerCase()
  const id = (cert.id || cert.uuid || '').toLowerCase()
  const course = (cert.course || cert.courseName || '').toLowerCase()
  
  return fullName.includes(searchTerm) || 
         id.includes(searchTerm) || 
         course.includes(searchTerm)
}

const selectCertificate = (cert) => {
  selectedCertificate.value = cert
}

const downloadCertificate = async (cert) => {
  try {
    const certId = cert.uuid || cert.id
    if (certId) {
      // Пытаемся получить PDF через API
      const response = await fetch(`${API_BASE}/api/certificate/${certId}`)
      if (response.ok) {
        const blob = await response.blob()
        if (blob.type === 'application/pdf') {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = `certificate_${certId}.pdf`
          a.click()
          window.URL.revokeObjectURL(url)
          return
        }
      }
    }
    
    // Fallback уведомление
    alert(`PDF yuklab olinmoqda: ${certId} - ${cert.fullName || cert.name}`)
  } catch (error) {
    console.error('Error downloading certificate:', error)
    alert('PDF yuklab olishda xatolik yuz berdi')
  }
}

const viewFullscreen = (cert) => {
  const certName = cert.fullName || cert.name || 'Noma\'lum'
  const certId = cert.id || cert.uuid || 'N/A'
  alert(`To'liq ko'rish: ${certName} - ${certId}`)
}

const retryFetch = () => {
  error.value = null
  if (searchQuery.value.trim()) {
    fetchCertificates(searchQuery.value)
  }
}

// Fallback данные на случай если API не работает
const getFallbackCertificates = () => {
  return [
    {
      id: 'DIC000001',
      fullName: 'AZAMOV ISMOIL',
      course: 'Computer literacy',
      startDate: '18 th October',
      endDate: '18 th December',
      year: '2023',
      hours: '48',
      issueDate: '03.02.2024',
      director: 'Urol Khabibov'
    },
    {
      id: 'DIC000002',
      fullName: 'KARIMOV AZIZ',
      course: 'Full Stack Development',
      startDate: '1 st March',
      endDate: '1 st June',
      year: '2024',
      hours: '120',
      issueDate: '15.06.2024',
      director: 'Urol Khabibov'
    },
    {
      id: 'DIC000003',
      fullName: 'RAVSHANOV ISLOMBEK',
      course: 'Full Stack Development',
      startDate: '1 st March',
      endDate: '4 st July',
      year: '2023',
      hours: '140',
      issueDate: '04.07.2023',
      director: 'Urol Khabibov'
    }
  ]
}

// Lifecycle
onMounted(() => {
  // Kerak bosa birdaniga fetch qilishniyam iloji bo!
  // fetchCertificates('')
})
</script>


<style scoped>

.certificates-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  position: relative;
  overflow-x: hidden;
}

.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1e3a8a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.8s ease;
}

.loader-container.fade-out {
  opacity: 0;
}

.loader {
  text-align: center;
  color: white;
}

.loader-text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: block;
}

.load {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.bg-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  animation: float 6s ease-in-out infinite;
}

.bg-circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.bg-circle-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
}

.bg-circle-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  left: 80%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
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
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.title-secondary {
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.9;
}

.quick-search-section {
  margin-bottom: 3rem;
}

.search-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.search-form {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-input-wrapper {
  flex: 1;
}

.search-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #3b82f6;
  color: white;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-btn:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-1px);
}

.search-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.main-content {
  margin-bottom: 3rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-card, .pdf-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.form-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.form-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #3b82f6;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #374151;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input:disabled {
  background-color: #f9fafb;
  color: #6b7280;
  cursor: not-allowed;
}

.input-with-icon {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  color: #6b7280;
}

.form-input.with-icon {
  padding-left: 2.5rem;
}

.info-box {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.info-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1e40af;
  font-size: 0.875rem;
}

.info-icon {
  width: 1rem;
  height: 1rem;
}

.submit-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #10b981;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #059669;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.pdf-viewer {
  min-height: 400px;
}

.pdf-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.pdf-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
}

.pdf-actions {
  display: flex;
  gap: 0.5rem;
}

.pdf-download-btn, .pdf-view-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pdf-download-btn {
  background: #3b82f6;
  color: white;
}

.pdf-download-btn:hover {
  background: #2563eb;
}

.pdf-view-btn {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.pdf-view-btn:hover {
  background: #e5e7eb;
}

.pdf-placeholder {
  text-align: center;
  padding: 2rem;
}

.pdf-icon-wrapper {
  margin-bottom: 1rem;
}

.pdf-icon {
  width: 4rem;
  height: 4rem;
  color: #3b82f6;
}

.pdf-placeholder-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.pdf-placeholder-subtitle {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.pdf-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  text-align: left;
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
}

.pdf-detail {
  display: flex;
  justify-content: space-between;
}

.detail-label {
  font-weight: 600;
  color: #374151;
}

.detail-value {
  color: #1f2937;
}

.pdf-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  color: #6b7280;
}

.empty-icon {
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.empty-subtitle {
  font-size: 0.875rem;
  opacity: 0.8;
}

.results-section {
  margin-top: 3rem;
}

.results-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.result-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.result-card.active {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.result-id {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.result-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #f59e0b;
}

.id-text {
  font-weight: 700;
  color: #1f2937;
}

.result-download {
  padding: 0.5rem;
  background: #f3f4f6;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.result-download:hover {
  background: #3b82f6;
  color: white;
}

.download-icon {
  width: 1rem;
  height: 1rem;
}

.result-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.result-course {
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.result-meta {
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.result-footer {
  border-top: 1px solid #e5e7eb;
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
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .search-form {
    flex-direction: column;
  }
  
  .pdf-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .pdf-details {
    grid-template-columns: 1fr;
  }
  
  .title-primary {
    font-size: 2rem;
  }
  
  .title-secondary {
    font-size: 1.25rem;
  }
  
  .content-wrapper {
    padding: 1rem;
  }
}


@import '../src/components/styles/style.css';
@import '../src/components/styles/certificates.css';
</style>