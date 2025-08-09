<template>
  <div id="courses" class="courses-container">
    <!-- Minimal background -->
    <div class="floating-bg"></div>

    <!-- Header -->
    <div class="header">
      <h2>Kurslarimiz</h2>
    </div>

    <!-- Grid Container -->
    <div class="courses-grid" :class="{ 'show-all': showAllCourses }">
      <div 
        v-for="(course, index) in displayedCourses" 
        :key="course.id"
        class="course-card"
        :class="{ 'hidden-mobile': index >= visibleCoursesCount && !showAllCourses }"
        @click="openCourse(course)"
      >
        <div class="course-icon-wrapper">
          <div class="course-icon">
            <i :class="course.icon"></i>
          </div>
        </div>
        
        <div class="course-content">
          <h3 class="course-title">{{ course.title }}</h3>
          <p class="course-description">{{ course.description }}</p>
          
          <div class="course-duration">{{ course.duration }}</div>
        </div>
      </div>
    </div>

    <!-- Show More/Less Button -->
    <div class="show-more-container" v-if="shouldShowButton">
      <button 
        class="show-more-btn"
        @click="toggleShowAll"
      >
        <span>{{ showAllCourses ? "Kamroq Ko'rish" : "Hammasini Ko'rish" }}</span>
        <i class="fas fa-chevron-down" :class="{ 'rotated': showAllCourses }"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCourses',
  data() {
    return {
      showAllCourses: false,
      windowWidth: window.innerWidth,
      courses: [
        {
          id: 1,
          title: 'Kompyuter savodxonligi',
          description: 'Microsoft Office dasturlari va asosiy kompyuter ko\'nikmalari',
          icon: 'fas fa-desktop',
          duration: '2 oy'
        },
        {
          id: 2,
          title: 'Moliya sohasida Excel',
          description: 'Moliya sohasida ishlash uchun Excel dasturi',
          icon: 'fas fa-chart-pie',
          duration: '1.5 oy'
        },
        {
          id: 3,
          title: 'Foundation - IT ga kirish',
          description: 'IT sohasiga kirish uchun asosiy bilimlar',
          icon: 'fas fa-rocket',
          duration: '3 oy'
        },
        {
          id: 4,
          title: 'Front-End dasturlash',
          description: 'HTML, CSS, JavaScript asoslari',
          icon: 'fab fa-html5',
          duration: '4 oy'
        },
        {
          id: 5,
          title: 'Grafik va web-dizayn',
          description: 'Zamonaviy dizayn texnologiyalari',
          icon: 'fas fa-palette',
          duration: '3 oy'
        },
        {
          id: 6,
          title: '3D Modeling',
          description: '3D modellashtirish dasturlari',
          icon: 'fas fa-cube',
          duration: '4 oy'
        },
        {
          id: 7,
          title: 'SMM + Mediagrafiya',
          description: 'Ijtimoiy tarmoqlar marketingi',
          icon: 'fas fa-share-alt',
          duration: '2 oy'
        },
        {
          id: 8,
          title: 'Robototexnika',
          description: 'Zamonaviy robot texnologiyalari',
          icon: 'fas fa-robot',
          duration: '3 oy'
        },
        {
          id: 9,
          title: '1C Buxgalteriya',
          description: 'Buxgalteriya hisobi dasturlari',
          icon: 'fas fa-calculator',
          duration: '2 oy'
        },
        {
          id: 10,
          title: 'IT English',
          description: 'IT sohasida ingliz tili o\'rganish',
          icon: 'fas fa-language',
          duration: '4 oy'
        },
        {
          id: 11,
          title: 'Matematika',
          description: 'Dasturlash uchun matematik asoslar',
          icon: 'fas fa-square-root-alt',
          duration: '3 oy'
        }
      ]
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768;
    },
    isTablet() {
      return this.windowWidth > 768 && this.windowWidth <= 1024;
    },
    visibleCoursesCount() {
      if (this.isMobile) return 3;
      if (this.isTablet) return 6;
      return this.courses.length;
    },
    shouldShowButton() {
      return (this.isMobile || this.isTablet) && this.courses.length > this.visibleCoursesCount;
    },
    displayedCourses() {
      if (!this.shouldShowButton || this.showAllCourses) {
        return this.courses;
      }
      return this.courses;
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    openCourse(course) {
      this.$emit('course-selected', course);
      console.log('Kurs tanlandi:', course.title);
    },
    toggleShowAll() {
      this.showAllCourses = !this.showAllCourses;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  }
}
</script>

<style scoped>
.courses-container {
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.courses-container::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
}

/* Minimal Background */
.floating-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -2;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.floating-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}

.floating-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.02) 50%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(0, 212, 255, 0.03) 50%, transparent 70%);
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff, #f4fbfc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(153, 0, 255, 0.3);
}

/* Grid Layout */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  padding: 50px;
}

/* Course Cards */
.course-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 1.2rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transform: translateY(0);
}

.course-card.hidden-mobile {
  opacity: 0;
  transform: translateY(20px);
  height: 0;
  min-height: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
}

.course-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.course-card:not(.hidden-mobile):hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.course-card:not(.hidden-mobile):hover::before {
  opacity: 1;
}

/* Icon Wrapper */
.course-icon-wrapper {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.course-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
  color: white;
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.course-card:not(.hidden-mobile):hover .course-icon {
  transform: scale(1.1) rotate(5deg);
}

/* Course Content */
.course-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.course-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #e5e8f6;
  margin-bottom: 0.6rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  line-height: 1.3;
}

.course-description {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: auto;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.course-duration {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.15);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  align-self: flex-start;
  margin-top: 1rem;
  font-weight: 600;
}

/* Show More Button */
.show-more-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.show-more-btn {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 25px;
  padding: 0.8rem 1.5rem;
  color: #e5e8f6;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.show-more-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.show-more-btn i {
  transition: transform 0.3s ease;
  font-size: 0.8rem;
}

.show-more-btn i.rotated {
  transform: rotate(180deg);
}

/* Responsive */
@media (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.2rem;
  }
}

@media (max-width: 768px) {
  .courses-container {
    height: fit-content !important;
    padding: 1.5rem 1rem;
  }
  
  .header {
    margin-bottom: 2rem;
  }
  
  .header h2 {
    font-size: 2rem;
  }
  
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 0 !important;
  }
  
  .course-card {
    min-height: 160px;
    padding: 1.2rem;
  }
  
  .course-icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .show-more-container {
    margin-top: 1.5rem;
  }

  .show-more-btn {
    /* transform: translateY(-40px); */
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .courses-container {
    padding: 1rem 0.5rem;
  }
  
  .course-card {
    padding: 1rem;
  }

  .header h2 {
    font-size: 1.8rem;
  }

  .show-more-btn {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
}

/* Animation for showing/hiding courses */
.courses-grid.show-all .course-card.hidden-mobile {
  opacity: 1;
  transform: translateY(0);
  height: auto;
  min-height: 160px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  animation: slideInUp 0.4s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .courses-grid.show-all .course-card.hidden-mobile {
    padding: 1.2rem;
    min-height: 160px;
  }
}

@media (max-width: 480px) {
  .courses-grid.show-all .course-card.hidden-mobile {
    padding: 1rem;
  }
}
</style>