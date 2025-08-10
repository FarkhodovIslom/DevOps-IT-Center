<template>
  <div class="testimonials-container">
    <div class="container-md">
      <!-- Header -->
      <div class="header">
        <h2>O'quvchilarimizning fikrlari</h2>
        <p class="subtitle">Bizning kurslarni tugatgan talabalarning haqiqiy sharhlari</p>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.id"
          class="testimonial-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <!-- Quote Icon -->
          <div class="quote-icon">
            <i class="fas fa-quote-left"></i>
          </div>

          <!-- Rating -->
          <div class="rating">
            <i v-for="n in 5" :key="n" class="fas fa-star"></i>
          </div>

          <!-- Comment Text -->
          <div class="comment-text">
            {{ testimonial.comment }}
          </div>

          <!-- Student Info -->
          <div class="student-info">
            <div class="student-avatar">
              <img :src="testimonial.avatar" :alt="testimonial.name" />
            </div>
            <div class="student-details">
              <h4 class="student-name">{{ testimonial.name }}</h4>
              <p class="student-course">{{ testimonial.course }}</p>
              <p class="completion-date">{{ testimonial.completionDate }}</p>
            </div>
          </div>

          <!-- Achievement Badge -->
          <div class="achievement-badge" v-if="testimonial.achievement">
            <i class="fas fa-trophy"></i>
            <span>{{ testimonial.achievement }}</span>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="stat-item">
          <div class="stat-number">93%</div>
          <div class="stat-label">Mamnun talabalar</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">3000+</div>
          <div class="stat-label">Muvaffaqiyatli bitiruvchi</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5+ yil</div>
          <div class="stat-label">O'qitish tajribasi</div>
        </div>
      </div>

      <!-- View All Button -->
      <!-- <div class="view-all-container">
        <button class="view-all-btn" @click="viewAllTestimonials">
          Barcha sharhlarni ko'rish
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: 'Aliyev Samandar',
          course: 'Frontend Development',
          avatar: '/assets/images/student__card-image.png',
          comment: 'Bu kurslarda o\'qishdan oldin umuman coding bilmasdim. Hozir esa professional darajada React va Vue.js da ishlayapman. Mentorlar juda professional, har bir savolga batafsil javob berishadi.',
          completionDate: 'Dekabr 2024',
          achievement: 'Ish topdi'
        },
        {
          id: 2,
          name: 'Karimova Malika',
          course: 'Full-Stack Development', 
          avatar: '/assets/images/student__card-image.png',
          comment: 'MERN stack ni mukammal o\'rganib oldim. Kurs davomida 8 ta real loyiha qildik. Portfolio yasab, ishga joylashdim. Eng yaxshi investitsiya bo\'ldi!',
          completionDate: 'Yanvar 2025',
          achievement: 'Freelancer'
        },
        {
          id: 3,
          name: 'Nazarov Jasurbek',
          course: 'UI/UX Design',
          avatar: '/assets/images/student__card-image.png',
          comment: 'Design thinking, user research, prototyping - hammasi juda amaliy va zamonaviy. Figma va Adobe Creative Suite ni professional darajada o\'zgandim. Hozir startup da ishlayman.',
          completionDate: 'Noyabr 2024',
          achievement: 'Startup'
        }
      ]
    }
  },
  methods: {
    viewAllTestimonials() {
      this.$emit('view-all-testimonials');
      console.log('Barcha sharhlarni ko\'rish clicked');
    }
  }
}
</script>

<style scoped>
.testimonials-container {
  position: relative;
  width: 100%;
  margin: 1rem 0 0 0;
  padding: 4rem 0 2rem 0;
  min-height: 80vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.container-md {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.2rem;
  color: #718096;
  margin-bottom: 0;
  font-weight: 500;
}

/* Testimonials Grid */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

/* Testimonial Cards */
.testimonial-card {
  background: white;
  border-radius: 16px;
  padding: 1.8rem;
  position: relative;
  box-shadow: 
    0 8px 30px rgba(0, 0, 0, 0.06),
    0 1px 6px rgba(0, 0, 0, 0.04);
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
  border: 1px solid rgba(0, 212, 255, 0.08);
  height: fit-content;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.12),
    0 5px 25px rgba(0, 0, 0, 0.15);
}

/* Quote Icon */
.quote-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  box-shadow: 0 3px 10px rgba(0, 212, 255, 0.25);
}

/* Rating */
.rating {
  display: flex;
  gap: 0.2rem;
  margin-bottom: 1rem;
}

.rating .fas {
  color: #fbbf24;
  font-size: 0.9rem;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Comment Text */
.comment-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #2d3748;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
}

.comment-text::before {
  content: '"';
  font-size: 3rem;
  color: rgba(0, 212, 255, 0.08);
  position: absolute;
  left: -0.8rem;
  top: -0.8rem;
  font-family: serif;
}

.comment-text::after {
  content: '"';
  font-size: 3rem;
  color: rgba(0, 212, 255, 0.08);
  position: absolute;
  right: -0.4rem;
  bottom: -1.5rem;
  font-family: serif;
}

/* Student Info */
.student-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.student-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(0, 212, 255, 0.15);
  flex-shrink: 0;
}

.student-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-details {
  flex: 1;
}

.student-name {
  font-size: 1rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 0.2rem;
}

.student-course {
  font-size: 0.85rem;
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 0.1rem;
}

.completion-date {
  font-size: 0.75rem;
  color: #718096;
  margin: 0;
}

/* Achievement Badge */
.achievement-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: 600;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  box-shadow: 0 3px 10px rgba(16, 185, 129, 0.25);
}

.achievement-badge i {
  font-size: 0.75rem;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #fefefe;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 1rem;
  color: #fefefe;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

/* View All Button */
.view-all-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.view-all-btn {
  background: linear-gradient(135deg, #00d4ff, #667eea);
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.view-all-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.view-all-btn:hover::before {
  left: 100%;
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .container-md {
    padding: 0 1rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  
  .header h2 {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .comment-text {
    font-size: 0.9rem;
  }
  
  .stats-section {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 2rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .view-all-btn {
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }

  /* Show only first 2 testimonials on mobile */
  .testimonial-card:nth-child(n+3) {
    display: none;
  }
}

@media (max-width: 480px) {
  .container-md {
    padding: 0 0.8rem;
  }
  
  .header h2 {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .testimonial-card {
    padding: 1.2rem;
  }
  
  .comment-text {
    font-size: 0.85rem;
  }
  
  .student-info {
    gap: 0.6rem;
  }
  
  .student-avatar {
    width: 45px;
    height: 45px;
  }
  
  .stats-section {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
  
  .view-all-btn {
    padding: 0.9rem 2rem;
    font-size: 0.95rem;
  }
}
</style>