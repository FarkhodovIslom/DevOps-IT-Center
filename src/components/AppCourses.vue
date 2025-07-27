<template>
  <div class="courses-container">
    <!-- Floating background elements -->
    <div class="floating-bg">
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
    </div>

    <!-- Header -->
    <div class="header">
      <h2>Kurslarimiz</h2>
    </div>

    <!-- Slider Container -->
    <div class="slider-container">
      <button 
        class="slider-btn prev-btn" 
        @click="prevSlide"
        :disabled="currentSlide === 0"
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      <div class="slider-wrapper" ref="sliderWrapper">
        <div 
          class="slider-track"
          :style="{ transform: `translateX(-${currentSlide * slideWidth}px)` }"
        >
          <div 
            v-for="(course, index) in courses" 
            :key="course.id"
            class="course-slide"
            @click="openCourse(course)"
          >
            <div class="course-image">
              <img :src="course.image" :alt="course.title" />
              <div class="course-overlay"></div>
            </div>
            
            <div class="course-content">
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="course-description">{{ course.description }}</p>
              
              <div class="course-footer">
                <div class="course-icon">
                  <i :class="course.icon"></i>
                </div>
                <div class="course-duration">{{ course.duration }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button 
        class="slider-btn next-btn" 
        @click="nextSlide"
        :disabled="currentSlide >= maxSlides"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>

    <!-- Dots Navigation -->
    <div class="dots-container">
      <button
        v-for="(dot, index) in Math.ceil(courses.length / slidesToShow)"
        :key="index"
        class="dot"
        :class="{ active: index === Math.floor(currentSlide / slidesToShow) }"
        @click="goToSlide(index * slidesToShow)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCourses',
  data() {
    return {
      currentSlide: 0,
      slidesToShow: 3,
      slideWidth: 380,
      courses: [
        {
          id: 1,
          title: 'Kompyuter savodxonligi',
          description: 'Microsoft Office dasturlari va asosiy kompyuter ko\'nikmalari',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-desktop',
          duration: '2 oy'
        },
        {
          id: 2,
          title: 'Moliya sohasida Excel',
          description: 'Moliya sohasida ishlash uchun Excel dasturi',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-chart-pie',
          duration: '1.5 oy'
        },
        {
          id: 3,
          title: 'Foundation - IT ga kirish',
          description: 'IT sohasiga kirish uchun asosiy bilimlar',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-rocket',
          duration: '3 oy'
        },
        {
          id: 4,
          title: 'Front-End dasturlash',
          description: 'HTML, CSS, JavaScript asoslari',
          image: '/api/placeholder/350/180',
          icon: 'fab fa-html5',
          duration: '4 oy'
        },
        {
          id: 5,
          title: 'Grafik va web-dizayn',
          description: 'Zamonaviy dizayn texnologiyalari',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-palette',
          duration: '3 oy'
        },
        {
          id: 6,
          title: '3D Modeling',
          description: '3D modellashtirish dasturlari',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-cube',
          duration: '4 oy'
        },
        {
          id: 7,
          title: 'SMM + Mediagrafiyu',
          description: 'Ijtimoiy tarmoqlar marketingi',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-share-alt',
          duration: '2 oy'
        },
        {
          id: 8,
          title: 'Robototexnika',
          description: 'Zamonaviy robot texnologiyalari',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-robot',
          duration: '3 oy'
        },
        {
          id: 9,
          title: '1C Buxgalteriya',
          description: 'Buxgalteriya hisobi dasturlari',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-calculator',
          duration: '2 oy'
        },
        {
          id: 10,
          title: 'IT English',
          description: 'IT sohasida ingliz tili o\'rganish',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-language',
          duration: '4 oy'
        },
        {
          id: 11,
          title: 'Matematika',
          description: 'Dasturlash uchun matematik asoslar',
          image: '/api/placeholder/350/180',
          icon: 'fas fa-square-root-alt',
          duration: '3 oy'
        }
      ]
    }
  },
  computed: {
    maxSlides() {
      return Math.max(0, this.courses.length - this.slidesToShow);
    }
  },
  mounted() {
    this.updateSlideWidth();
    window.addEventListener('resize', this.updateSlideWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSlideWidth);
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.maxSlides) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToSlide(slideIndex) {
      this.currentSlide = Math.min(slideIndex, this.maxSlides);
    },
    updateSlideWidth() {
      if (window.innerWidth < 768) {
        this.slidesToShow = 1;
        this.slideWidth = 320;
      } else if (window.innerWidth < 1024) {
        this.slidesToShow = 2;
        this.slideWidth = 360;
      } else {
        this.slidesToShow = 3;
        this.slideWidth = 380;
      }
    },
    openCourse(course) {
      this.$emit('course-selected', course);
      console.log('Kurs tanlandi:', course.title);
    }
  }
}
</script>

<style scoped>
.courses-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Floating background */
.floating-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(118, 75, 162, 0.1));
  animation: float 6s ease-in-out infinite;
}

.floating-element:nth-child(1) {
  width: 200px;
  height: 200px;
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.floating-element:nth-child(2) {
  width: 150px;
  height: 150px;
  top: 60%;
  right: -5%;
  animation-delay: 2s;
}

.floating-element:nth-child(3) {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
}

/* Slider */
.slider-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.slider-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: 2rem;
  padding: 20px;
}

.slider-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  gap: 2rem;
}

/* Course Slides */
.course-slide {
  min-width: 350px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 2px solid #764ba273;
  border-radius: 1.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
  box-shadow: 
    0 8px 22px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.course-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.course-slide:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(0, 212, 255, 0.3),
    0 0 30px rgba(0, 212, 255, 0.2);
}

.course-slide:hover::before {
  opacity: 1;
}

/* Course Image */
.course-image {
  width: 100%;
  height: 160px;
  border-radius: 1rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.course-slide:hover .course-image img {
  transform: scale(1.1);
}

.course-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.course-slide:hover .course-overlay {
  opacity: 1;
}

/* Course Content */
.course-content {
  position: relative;
  z-index: 2;
}

.course-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  line-height: 1.3;
}

.course-description {
  font-size: 0.85rem;
  color: #151515;
  margin-bottom: 1rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Course Footer */
.course-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.course-icon {
  width: 35px;
  height: 35px;
  border-radius: 0.6rem;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
  color: white;
  font-size: 1rem;
}

.course-duration {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.6rem;
  border-radius: 0.8rem;
  backdrop-filter: blur(10px);
}

/* Slider Buttons */
.slider-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.slider-btn:hover:not(:disabled) {
  background: rgba(0, 212, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  transform: scale(1.1);
}

.slider-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Dots Navigation */
.dots-container {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: linear-gradient(135deg, #00d4ff, #667eea);
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
  transform: scale(1.2);
}

.dot:hover {
  background: rgba(0, 212, 255, 0.6);
}

/* Responsive */
@media (max-width: 1024px) {
  .course-slide {
    min-width: 320px;
  }
}

@media (max-width: 768px) {
  .courses-container {
    padding: 1rem 0.5rem;
  }
  
  .header h2 {
    font-size: 2rem;
  }
  
  .course-slide {
    min-width: 280px;
  }
  
  .slider-btn {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>