<template>
  <section class="benefits-section">
    <div class="benefits-container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Nima uchun "DevOps IT Center"da o'qish kerak?</h2>
      </div>

      <!-- Benefits Grid -->
      <div class="benefits-grid">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="index"
          class="benefit-card"
          :class="{ 'visible': visibleCards.includes(index) }"
          :style="{ 
            animationDelay: `${index * 0.15}s`,
            '--hover-color': benefit.hoverColor 
          }"
          @mouseenter="playHoverSound"
        >
          <div class="benefit-icon" :style="{ background: benefit.iconBg }">
            <component :is="benefit.icon" />
          </div>
          
          <div class="benefit-content">
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-description">{{ benefit.description }}</p>
          </div>

          <!-- Animated background elements -->
          <div class="card-decoration">
            <div class="deco-dot deco-dot-1"></div>
            <div class="deco-dot deco-dot-2"></div>
            <div class="deco-dot deco-dot-3"></div>
          </div>

          <!-- Hover glow effect -->
          <div class="hover-glow" :style="{ background: benefit.glowGradient }"></div>
        </div>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="background-elements">
      <div class="bg-shape bg-shape-1"></div>
      <div class="bg-shape bg-shape-2"></div>
      <div class="bg-shape bg-shape-3"></div>
      <div class="floating-particles">
        <div 
          v-for="i in 15" 
          :key="i" 
          class="particle"
          :style="{ 
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 5 + 's',
            animationDuration: (3 + Math.random() * 4) + 's'
          }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitsSection',
  data() {
    return {
      visibleCards: [],
      benefits: [
        {
          title: 'Bepul koyvorking',
          description: 'Darsdan tashqari holatlda, vaqtingiz bo\'lganida shuq ulflrish uchun bepul koyvorking va WiFi dan foydalanish imkoniyati mavjud.',
          icon: 'CoworkingIcon',
          iconBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          hoverColor: '#667eea',
          glowGradient: 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)'
        },
        {
          title: 'Sifatli ta\'lim',
          description: 'Darslarimizda 100% amaliy darslar bo\'lishi va katta tajribaga ega ustalardan ta\'lim olish imkoniyati.',
          icon: 'QualityIcon',
          iconBg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          hoverColor: '#f5576c',
          glowGradient: 'radial-gradient(circle, rgba(245, 87, 108, 0.2) 0%, transparent 70%)'
        },
        {
          title: 'Bo\'lib to\'lash imkoniyati',
          description: '14 yoshdan oshgan yoshlarimiz o\'qish xarajatlarini Bilg\'ur platformasi orqali, kurs yakunlangandan 2 oydan so\'ng bo\'lib to\'lash imkoniyati.',
          icon: 'PaymentIcon',
          iconBg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          hoverColor: '#a8edea',
          glowGradient: 'radial-gradient(circle, rgba(168, 237, 234, 0.2) 0%, transparent 70%)'
        },
        {
          title: 'Doimiy musobaqalar',
          description: 'Dasturlash, dizayn va marketing sohalari bo\'yicha tajriba olmashlari va musobaqalar tashkil qilinadi.',
          icon: 'CompetitionIcon',
          iconBg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          hoverColor: '#00f2fe',
          glowGradient: 'radial-gradient(circle, rgba(0, 242, 254, 0.2) 0%, transparent 70%)'
        },
        {
          title: 'To\'lim xarajatlarini qaytarib olish',
          description: '14 yoshidan 30 yoshigacha bo\'lgan yoshlar, o\'qish xarajatlarini 30% dan 100% gacha qaytarib olish imkoniyati mavjud.',
          icon: 'RefundIcon',
          iconBg: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
          hoverColor: '#00d4ff',
          glowGradient: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)'
        },
        {
          title: 'Sertifikat',
          description: 'Kursni muvaffaqiyatli tamomlagan o\'quvchilar "DevOps IT Center"ning Respami texnologiyalar vazirligii tosdiqilagan sertifikatiga ega bo\'ladi.',
          icon: 'CertificateIcon',
          iconBg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
          hoverColor: '#fcb69f',
          glowGradient: 'radial-gradient(circle, rgba(252, 182, 159, 0.2) 0%, transparent 70%)'
        }
      ]
    }
  },
  mounted() {
    this.setupIntersectionObserver();
    this.animateParticles();
  },
  methods: {
    setupIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!this.visibleCards.includes(index)) {
              setTimeout(() => {
                this.visibleCards.push(index);
              }, index * 100); // Staggered animation
            }
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '50px'
      });

      this.$nextTick(() => {
        const cards = document.querySelectorAll('.benefit-card');
        cards.forEach((card, index) => {
          card.dataset.index = index;
          observer.observe(card);
        });
      });
    },
    
    animateParticles() {
      // Add some dynamic particle animation
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        setTimeout(() => {
          particle.style.opacity = '1';
        }, index * 200);
      });
    },
    
    playHoverSound() {
      // Optional: Add subtle hover feedback
      // Could implement Web Audio API for sound effects
    }
  },
  components: {
    CoworkingIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      `
    },
    QualityIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      `
    },
    PaymentIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      `
    },
    CompetitionIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
          <path d="M4 22h16"></path>
          <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.74 13 20.44 13 22"></path>
          <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C11.96 18.74 11 20.44 11 22"></path>
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
        </svg>
      `
    },
    RefundIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="8"></circle>
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      `
    },
    CertificateIcon: {
      template: `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
        </svg>
      `
    }
  }
}
</script>

<style scoped>
.benefits-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
  position: relative;
  overflow: hidden;
}

.benefits-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.benefit-card.visible {
  transform: translateY(0);
  opacity: 1;
}

.benefit-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
}

.benefit-card:hover .hover-glow {
  opacity: 1;
  transform: scale(1.2);
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1) rotate(5deg);
}

.benefit-card:hover .deco-dot {
  animation-play-state: running;
}

/* Benefit Icon */
.benefit-icon {
  width: 70px;
  height: 70px;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
}

.benefit-icon svg {
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Benefit Content */
.benefit-content {
  position: relative;
  z-index: 2;
}

.benefit-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.benefit-card:hover .benefit-title {
  color: var(--hover-color);
}

.benefit-description {
  color: #4a5568;
  line-height: 1.6;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.benefit-card:hover .benefit-description {
  color: #2d3748;
}

/* Card Decorations */
.card-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.deco-dot {
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  animation: float 4s ease-in-out infinite;
  animation-play-state: paused;
}

.deco-dot-1 {
  width: 60px;
  height: 60px;
  top: 20px;
  right: 20px;
  animation-delay: 0s;
}

.deco-dot-2 {
  width: 40px;
  height: 40px;
  bottom: 60px;
  right: 40px;
  animation-delay: 1s;
}

.deco-dot-3 {
  width: 25px;
  height: 25px;
  bottom: 20px;
  right: 100px;
  animation-delay: 2s;
}

/* Hover Glow Effect */
.hover-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease;
  pointer-events: none;
  z-index: 0;
}

/* Background Elements */
.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  animation: float 8s ease-in-out infinite;
}

.bg-shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: -10%;
  animation-delay: 0s;
}

.bg-shape-2 {
  width: 200px;
  height: 200px;
  top: 50%;
  right: -5%;
  animation-delay: 3s;
}

.bg-shape-3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 20%;
  animation-delay: 6s;
}

/* Floating Particles */
.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat 6s ease-in-out infinite;
  top: 100%;
}

/* Animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(120deg);
  }
  66% {
    transform: translateY(5px) rotate(240deg);
  }
}

@keyframes particleFloat {
  0% {
    transform: translateY(0px) translateX(0px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .benefits-container {
    padding: 0 1rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .benefit-card {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 1.875rem;
    line-height: 1.3;
  }
  
  .benefit-title {
    font-size: 1.25rem;
  }
  
  .benefit-description {
    font-size: 0.9rem;
  }
  
  .benefit-icon {
    width: 60px;
    height: 60px;
  }
  
  .benefit-icon svg {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .benefits-section {
    padding: 4rem 0;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .benefit-card {
    padding: 1.25rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .bg-shape {
    display: none;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .benefit-card,
  .deco-dot,
  .bg-shape,
  .particle {
    animation: none !important;
    transition: none !important;
  }
  
  .benefit-card.visible {
    transform: none;
    opacity: 1;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .benefit-card {
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
  
  .benefit-title {
    color: #000;
  }
  
  .benefit-description {
    color: #333;
  }
}
</style>