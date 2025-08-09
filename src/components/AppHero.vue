<template>
  <section class="hero-section">
    <div class="hero-container">
      <!-- Left Content - Slider -->
      <div class="hero-content">
        <div class="slider-wrapper">
          <!-- Navigation Arrows -->
          <button class="nav-arrow nav-arrow-left" @click="prevSlide" :disabled="currentSlide === 0">
            <i class="fas fa-chevron-left"></i>
          </button>
          
          <button class="nav-arrow nav-arrow-right" @click="nextSlide" :disabled="currentSlide === slides.length - 1">
            <i class="fas fa-chevron-right"></i>
          </button>

          <!-- Slider Content -->
          <div class="slider-content">
            <transition name="slide" mode="out-in">
              <div :key="currentSlide" class="slide">
                <h1 class="slide-title">{{ slides[currentSlide].title }}</h1>
                <p class="slide-description">{{ slides[currentSlide].description }}</p>
                
                <!-- Animated Icons -->
                <div class="slide-icons">
                  <div 
                    v-for="(icon, index) in slides[currentSlide].icons" 
                    :key="index"
                    class="slide-icon"
                    :style="{ animationDelay: `${index * 0.2}s` }"
                  >
                    <div class="icon-wrapper">
                      <i :class="icon.iconClass"></i>
                    </div>
                    <span class="icon-label">{{ icon.label }}</span>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Dots Indicator -->
          <div class="dots-indicator">
            <button 
              v-for="(slide, index) in slides" 
              :key="index"
              class="dot"
              :class="{ 'active': currentSlide === index }"
              @click="goToSlide(index)"
            ></button>
          </div>
        </div>
      </div>

      <!-- Right Content - Consultation Form -->
      <div class="consultation-form">
        <div class="form-card">
          <div class="form-header">
            <div class="form-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3 class="form-title">Bepul konsultatsiya</h3>
            <p class="form-subtitle">Telefon raqamingizni yozing, sizga biz tez orada bog'lanib savollatingizga javob beramiz</p>
          </div>

          <form @submit.prevent="submitForm" class="consultation-form-inner">
            <div class="form-group">
              <input 
                v-model="formData.name"
                type="text" 
                placeholder="Ismingiz"
                class="form-input"
                :class="{ 'error': errors.name }"
                @blur="validateField('name')"
              >
              <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
            </div>

            <div class="form-group">
              <input 
                v-model="formData.phone"
                type="tel" 
                placeholder="+998"
                class="form-input"
                :class="{ 'error': errors.phone }"
                @blur="validateField('phone')"
                @input="formatPhone"
              >
              <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input 
                  v-model="formData.agreement"
                  type="checkbox" 
                  class="checkbox-input"
                >
                <span class="checkbox-custom"></span>
                <span class="checkbox-text">Shaxsiy ma'lumotlarim qoyta ishlanishiga roziman</span>
              </label>
            </div>

            <button 
              type="submit" 
              class="submit-btn"
              :class="{ 'loading': isLoading }"
              :disabled="!isFormValid || isLoading"
            >
              <span v-if="!isLoading" class="btn-text">So'rov yuborish</span>
              <div v-else class="loading-spinner">
                <div class="spinner"></div>
                <span>Yuborilmoqda...</span>
              </div>
            </button>
          </form>

          <!-- Success Message -->
          <transition name="success">
            <div v-if="showSuccess" class="success-message">
              <div class="success-icon">
                <i class="fas fa-check"></i>
              </div>
              <div>
                <h4>Muvaffaqiyatli yuborildi!</h4>
                <p>Tez orada siz bilan bog'lanamiz</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="bg-elements">
      <div class="bg-circle bg-circle-1"></div>
      <div class="bg-circle bg-circle-2"></div>
      <div class="bg-circle bg-circle-3"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHero',
  data() {
    return {
      currentSlide: 0,
      isLoading: false,
      showSuccess: false,
      formData: {
        name: '',
        phone: '',
        agreement: false
      },
      errors: {},
      slides: [
        {
          title: "Kelajak kasblarini biz bilan o'rganing!",
          description: "Hozirgi kunda istalgan biznes va startupning rivojlanishi uchun dasturchi, dizayner va marketolog muhim mutaxasislardan biri xisoblanadi.",
          icons: [
            { iconClass: 'fas fa-laptop-code', label: '' },
            { iconClass: 'fas fa-palette', label: '' },
            { iconClass: 'fas fa-chart-bar', label: '' },
            { iconClass: 'fas fa-rocket', label: '' }
          ]
        },
        {
          title: "Professional darajada o'rganing!",
          description: "Tajribali mentorlar bilan ishlang va real loyihalarda qatnashing. Nazariyadan amaliyotga o'tish uchun real loyihalar eng yaxshi yo'l.",
          icons: [
            { iconClass: 'fas fa-chalkboard-teacher', label: '' },
            { iconClass: 'fas fa-trophy', label: '' },
            { iconClass: 'fas fa-briefcase', label: '' },
            { iconClass: 'fas fa-handshake', label: '' }
          ]
        },
        {
          title: "Karyerangizni yangi bosqichga olib chiqing!",
          description: "IT sohasida yuqori maoshli ish joylarini topish va professional rivojlanish uchun zarur bo'lgan ko'nikmalarni egallang.",
          icons: [
            { iconClass: 'fas fa-chart-line', label: '' },
            { iconClass: 'fas fa-dollar-sign', label: '' },
            { iconClass: 'fas fa-star', label: '' },
            { iconClass: 'fas fa-magic', label: '' }
          ]
        }
      ]
    }
  },
  computed: {
    isFormValid() {
      return this.formData.name.trim() && 
             this.formData.phone.trim() && 
             this.formData.agreement &&
             !Object.keys(this.errors).length;
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    startAutoSlide() {
      setInterval(() => {
        if (this.currentSlide === this.slides.length - 1) {
          this.currentSlide = 0;
        } else {
          this.currentSlide++;
        }
      }, 5000);
    },
    formatPhone(event) {
      let value = event.target.value.replace(/\D/g, '');
      if (!value.startsWith('998')) {
        value = '998' + value;
      }
      if (value.length > 12) {
        value = value.substring(0, 12);
      }
      
      let formatted = '+' + value;
      if (value.length > 3) {
        formatted = '+' + value.substring(0, 3) + ' ' + value.substring(3);
      }
      if (value.length > 5) {
        formatted = '+' + value.substring(0, 3) + ' ' + value.substring(3, 5) + ' ' + value.substring(5);
      }
      if (value.length > 8) {
        formatted = '+' + value.substring(0, 3) + ' ' + value.substring(3, 5) + ' ' + value.substring(5, 8) + ' ' + value.substring(8);
      }
      
      this.formData.phone = formatted;
    },
    validateField(field) {
      this.errors = { ...this.errors };
      delete this.errors[field];
      
      if (field === 'name' && !this.formData.name.trim()) {
        this.errors.name = 'Ism kiritish shart';
      }
      
      if (field === 'phone') {
        const phoneNumbers = this.formData.phone.replace(/\D/g, '');
        if (!phoneNumbers || phoneNumbers.length < 12) {
          this.errors.phone = 'To\'g\'ri telefon raqam kiriting';
        }
      }
    },
    
    
    async submitForm() {
      this.validateField('name');
      this.validateField('phone');
      
      if (!this.isFormValid) return;
      
      this.isLoading = true;
      
      try {
        const leadData = {
          fullname: this.formData.name.trim(),
          phone_number: this.formData.phone,
          branches: "krug", // Default branch value
          is_online: true,  // Assuming online consultation
          is_offline: false, // Assuming not offline
          is_agree: this.formData.agreement
        };

        console.log('Sending data:', leadData); // Debug log
        
        // Make API call
        const response = await fetch('https://devops-itc.alwaysdata.net/api/leads/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any required authentication headers if needed
          },
          body: JSON.stringify(leadData)
        });
        
        if (!response.ok) {
          const errorData = await response.text();
          console.error('API Error Response:', errorData);
          throw new Error(`HTTP error! status: ${response.status}, details: ${errorData}`);
        }
        
        const responseData = await response.json();
        console.log('Lead created successfully:', responseData);
        
        // Show success message
        this.showSuccess = true;
        
        // Reset form
        this.formData = { 
          name: '', 
          phone: '', 
          agreement: false 
        };
        
        // Clear any existing errors
        this.errors = {};
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
        
      } catch (error) {
        console.error('Form submission error:', error);
        
        // Show error message to user
        // You might want to add an error state to show user-friendly error messages
        alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
        
      } finally {
        this.isLoading = false;
      }
    }


  }
}
</script>

<style scoped>
/* Import FontAwesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.hero-section {
  min-height: 80vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 0;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
}

/* Left Content - Slider */
.hero-content {
  position: relative;
}

.slider-wrapper {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 3rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

/* Fixed Navigation Arrows */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  opacity: 1;
  visibility: visible;
}

.nav-arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.2);
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
}

.nav-arrow-left {
  left: -25px;
}

.nav-arrow-right {
  right: -25px;
}

.slider-content {
  min-height: 300px;
  display: flex;
  align-items: center;
}

.slide {
  text-align: center;
  color: white;
}

.slide-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(45deg, #fff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.slide-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.slide-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.slide-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.icon-wrapper:hover {
  transform: translateY(-5px) scale(1.1);
  background: rgba(255, 255, 255, 0.3);
}

.icon-label {
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0.9;
}

.dots-indicator {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(255, 255, 255, 0.7);
}

/* Right Content - Form */
.consultation-form {
  position: relative;
}

.form-card {
  background: white;
  border-radius: 2rem;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.form-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #00d4ff);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 1.5rem;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  color: #6b7280;
  line-height: 1.5;
  font-size: 0.95rem;
}

.consultation-form-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f9fafb;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.error {
  border-color: #ef4444;
  background: #fef2f2;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.checkbox-group {
  margin-top: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  line-height: 1.5;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-top: 2px;
}

.checkbox-input:checked + .checkbox-custom {
  background: #667eea;
  border-color: #667eea;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '✓';
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.checkbox-text {
  font-size: 0.875rem;
  color: #6b7280;
}

.submit-btn {
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.submit-btn.loading {
  pointer-events: none;
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.success-message {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.success-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
}

/* Background Elements */
.bg-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.bg-circle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.bg-circle-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  right: -5%;
  animation-delay: 2s;
}

.bg-circle-3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Slide Transitions */
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Success Transition */
.success-enter-active, .success-leave-active {
  transition: all 0.3s ease;
}

.success-enter-from, .success-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .slide-title {
    font-size: 2rem;
  }
  
  .slide-icons {
    gap: 1rem;
  }
  
  .nav-arrow-left {
    left: -25px;
  }
  
  .nav-arrow-right {
    right: -25px;
  }
}

@media (max-width: 768px) {
  .hero-container {
    padding: 0 1rem;
  }
  
  .slider-wrapper, .form-card {
    padding: 2rem;
  }
  
  .slide-title {
    font-size: 1.75rem;
  }
  
  .slide-icons {
    gap: 1rem;
  }
  
  .icon-wrapper {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
  
  .nav-arrow {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
  
  .nav-arrow-left {
    left: -20px;
  }
  
  .nav-arrow-right {
    right: -20px;
  }
}

@media (max-width: 480px) {
  .slide-icons {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .form-card {
    padding: 1.5rem;
  }
  
  .slide-title {
    font-size: 1.5rem;
  }
  
  .nav-arrow-left {
    left: 10px;
  }
  
  .nav-arrow-right {
    right: 10px;
  }
  
  .nav-arrow {
    width: 35px;
    height: 35px;
    font-size: 12px;
  }
}
</style>