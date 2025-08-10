<template>
  <section class="features-section" id="services">
    <div class="features-container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">"DevOps IT Center" bu -</h2>
        <a href="#contact" class="floating-chat-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </a>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
          :class="{ 'visible': visibleCards.includes(index) }"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="feature-icon">
            <div class="icon-wrapper" :style="{ background: feature.iconBg }">
              <!-- <component :is="feature.icon" /> -->
               <i :class="['fas', feature.icon]"></i>
            </div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
          
          <!-- Floating decorative elements -->
          <div class="feature-decoration">
            <div class="deco-circle deco-circle-1"></div>
            <div class="deco-circle deco-circle-2"></div>
          </div>
        </div>
      </div>

      <!-- Course Cards -->
      <div class="course-cards">
        <div class="course-card course-card-primary">
          <div class="course-header">
            <div class="course-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 class="course-title">Kurslar</h3>
          </div>
          
          <p class="course-description">
            IT sohasiga ingliz tili va matematika kurslaridan 
            chuqurlashtirilgan kurslarda ta'lim olib, o'z kelajagingizni 
            yarating!
          </p>
          
          <div class="course-visual">
            <div class="code-lines">
              <div class="code-line" style="width: 80%"></div>
              <div class="code-line" style="width: 60%"></div>
              <div class="code-line" style="width: 90%"></div>
              <div class="code-line" style="width: 70%"></div>
            </div>
            <div class="graduation-cap">
              🎓
            </div>
          </div>
          
          <button class="course-btn course-btn-primary">
            11 ta kurs
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12,5 19,12 12,19"></polyline>
            </svg>
          </button>
        </div>

        <div class="course-card course-card-secondary">
          <div class="course-header">
            <div class="course-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="16,18 22,12 16,6"></polyline>
                <polyline points="8,6 2,12 8,18"></polyline>
              </svg>
            </div>
            <h3 class="course-title">Xizmatlar</h3>
          </div>
          
          <p class="course-description">
            IT sohasida keng qo'lamli xizmatlarni taqdim etadi. 
            Dasturlash, Grafik dizayn, SMM va Kompyuter ta'mirlash 
            ishlarini o'z kasbini ustalaringa ishoning!
          </p>
          
          <div class="course-visual">
            <div class="service-icons">
              <div class="service-icon"><i class="fas fa-laptop-code"></i></div>
              <div class="service-icon"><i class="fas fa-palette"></i></div>
              <div class="service-icon"><i class="fas fa-mobile-phone"></i></div>
              <div class="service-icon"><i class="fas fa-wrench"></i></div>
            </div>
          </div>
          
          <button class="course-btn course-btn-secondary">
            Xizmatlarimiz
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12,5 19,12 12,19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <!-- Statistics Section -->
      <div class="stats-section">
        <div class="stats-intro">
          <h3 class="stats-title">IT sohasiga ixtisoslashgan, o'z jamoasiga professionallarni jamlagan ta'lim va xizmatlar markazi</h3>
        </div>
        
        <div class="stats-grid">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="stat-card"
            :class="{ 'counting': isIntersecting }"
          >
            <div class="stat-number">
              <span class="counter" :style="{ color: stat.color }">
                {{ isIntersecting ? currentCounts[index] : 0 }}
              </span>
              <span class="stat-suffix">%</span>
            </div>
            <h4 class="stat-label">{{ stat.label }}</h4>
            <p class="stat-description">{{ stat.description }}</p>
            
            <!-- Animated background -->
            <div class="stat-bg" :style="{ background: stat.bgGradient }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background decorations -->
    <div class="section-decorations">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data() {
    return {
      visibleCards: [],
      isIntersecting: false,
      currentCounts: [0, 0, 0],
      features: [
        {
          title: 'Zamonaviy Kasblar',
          description: 'Dasturlash, dizayn va marketing kabi zamonaviy kasblar o\'rgatadigan markaz.',
          icon: 'fa-briefcase',
          iconBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          title: 'Kelajakka Murojaat',
          description: 'Zamonaviy kasblar yordamida insonlar hayotini yaxshilovchi va kelajakka bo\'lgan ishonchni mustahkanlovchi maskan.',
          icon: 'fa-square-check',
          iconBg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          title: 'IT Ekspertlari',
          description: 'IT sohasidagi barcha xizmatlarni o\'z kasbining ustalari tomonidan bajaradigan professionallar jamlangan maskan.',
          icon: 'fa-users-line',
          iconBg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        }
      ],
      stats: [
        {
          number: 85,
          label: 'Bitiruvchilarimiz IT sohasi va Kompyuter kurslarini tugatib ish o\'rnini topgan',
          description: '',
          color: '#00d4ff',
          bgGradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)'
        },
        {
          number: 75,
          label: 'O\'quvchilarimiz real loyilalarda qatnashib kelishmoqda',
          description: '',
          color: '#667eea',
          bgGradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(102, 126, 234, 0.05) 100%)'
        },
        {
          number: 55,
          label: 'Dasturlash kurslarimizni bitirgan o\'quvchilarimizning 55 foizi xalqaro hokatonlarda ishtirok etishdi',
          description: '',
          color: '#f5576c',
          bgGradient: 'linear-gradient(135deg, rgba(245, 87, 108, 0.1) 0%, rgba(245, 87, 108, 0.05) 100%)'
        }
      ]
    }
  },
  mounted() {
    this.animateCardsOnScroll();
    this.setupStatsObserver();
  },
  methods: {
    animateCardsOnScroll() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!this.visibleCards.includes(index)) {
              this.visibleCards.push(index);
            }
          }
        });
      }, { threshold: 0.1 });

      this.$nextTick(() => {
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card, index) => {
          card.dataset.index = index;
          observer.observe(card);
        });
      });
    },
    
    setupStatsObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isIntersecting) {
            this.isIntersecting = true;
            this.animateCounters();
          }
        });
      }, { threshold: 0.3 });

      this.$nextTick(() => {
        const statsSection = document.querySelector('.stats-grid');
        if (statsSection) {
          observer.observe(statsSection);
        }
      });
    },
    
    animateCounters() {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;
      
      this.stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.number / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            this.currentCounts[index] = stat.number;
            clearInterval(timer);
          } else {
            this.currentCounts[index] = Math.floor(current);
          }
        }, interval);
      });
    }
  },
  components: {
    CodeIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16,18 22,12 16,6"></polyline>
          <polyline points="8,6 2,12 8,18"></polyline>
        </svg>
      `
    },
    MarketingIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 3v18h18"></path>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
        </svg>
      `
    },
    ProfessionalIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      `
    }
  }
}
</script>

<style scoped>
.features-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}
.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.floating-chat-icon {
  position: absolute;
  top: -20px;
  right: 20%;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}
.floating-chat-icon svg {
  width: 24px;
  height: 24px;
}
/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}
.feature-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.6s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.feature-card.visible {
  transform: translateY(0);
  opacity: 1;
}
.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}
.feature-icon {
  margin-bottom: 1.5rem;
}
.icon-wrapper {
  width: 70px;
  height: 70px;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.feature-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.icon-wrapper i {
  font-size: 2rem;
}

.feature-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.feature-content p {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
}

.feature-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.05);
}

.deco-circle-1 {
  width: 100px;
  height: 100px;
  top: -50px;
  right: -50px;
  animation: float 4s ease-in-out infinite;
}

.deco-circle-2 {
  width: 60px;
  height: 60px;
  bottom: -30px;
  right: 20px;
  animation: float 4s ease-in-out infinite 2s;
}


/* Course Cards */
.course-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
}

.course-card {
  border-radius: 2rem;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.course-card-primary {
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  color: white;
}

.course-card-secondary {
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
  color: white;
}

.course-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.course-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.course-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.course-icon svg {
  width: 24px;
  height: 24px;
}

.course-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
}

.course-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.course-visual {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.code-lines {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.code-line {
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  animation: pulse 2s ease-in-out infinite;
}

.code-line:nth-child(2) {
  animation-delay: 0.5s;
}

.code-line:nth-child(3) {
  animation-delay: 1s;
}

.code-line:nth-child(4) {
  animation-delay: 1.5s;
}

.graduation-cap {
  font-size: 3rem;
  animation: bounce 2s infinite;
}

.service-icons {
  display: flex;
  gap: 1rem;
}

.service-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

.service-icon:nth-child(2) {
  animation-delay: 0.5s;
}

.service-icon:nth-child(3) {
  animation-delay: 1s;
}

.service-icon:nth-child(4) {
  animation-delay: 1.5s;
}

.course-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.course-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.course-btn svg {
  width: 20px;
  height: 20px;
}

/* Statistics Section */
.stats-section {
  text-align: center;
}

.stats-intro {
  margin-bottom: 3rem;
}

.stats-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #475569;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.stat-number {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1rem;
}

.counter {
  font-size: 3rem;
  font-weight: 800;
  transition: all 0.3s ease;
}

.stat-suffix {
  font-size: 2rem;
  font-weight: 700;
  color: #94a3b8;
  margin-left: 0.25rem;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.stat-description {
  color: #64748b;
  font-size: 0.9rem;
}

.stat-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(30px, -30px);
  opacity: 0.5;
}

/* Background Decorations */
.section-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(102, 126, 234, 0.05);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 20%;
  left: -10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 70%;
  right: -5%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 10%;
  left: 50%;
  animation-delay: 4s;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .course-cards {
    grid-template-columns: 1fr;
  }
  
  .floating-chat-icon {
    right: 10%;
  }
}

@media (max-width: 768px) {
  .features-container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .course-cards {
    grid-template-columns: 1fr;
  }
  
  .course-card {
    padding: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .floating-chat-icon {
    display: none;
  }
}

@media (max-width: 480px) {
  .feature-card, .course-card, .stat-card {
    padding: 1.5rem;
  }
  
  .counter {
    font-size: 2.5rem;
  }
  
  .stat-suffix {
    font-size: 1.5rem;
  }
}
</style>