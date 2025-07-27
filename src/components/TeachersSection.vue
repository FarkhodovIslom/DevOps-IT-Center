<template>
  <div class="teachers-container">
    <!-- Floating background elements -->
    <div class="floating-bg">
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
    </div>

    <!-- Header -->
    <div class="header">
      <h2>O'quvchilarimizning fikrlari</h2>
    </div>

    <!-- Teachers Grid -->
    <div class="teachers-grid">
      <div 
        v-for="(teacher, index) in teachers" 
        :key="teacher.id"
        class="teacher-card"
        :class="{ 
          'active': activeTeacher === index,
          'video-playing': activeTeacher === index && isPlaying 
        }"
        :style="{ animationDelay: `${index * 0.1}s` }"
        @click="selectTeacher(index)"
      >
        <!-- Video/Image Container -->
        <div class="media-container">
          <img 
            :src="teacher.image" 
            :alt="teacher.name"
            class="teacher-image"
            v-show="activeTeacher !== index || !isPlaying"
          />
          
          <!-- Video Placeholder (когда активен) -->
          <div 
            v-show="activeTeacher === index && isPlaying"
            class="video-container"
          >
            <div class="video-placeholder">
              <div class="video-controls">
                <button class="play-btn" @click.stop="toggleVideo">
                  <i class="fas fa-pause"></i>
                </button>
                <div class="video-progress">
                  <div class="progress-bar" :style="{ width: `${videoProgress}%` }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Play Button Overlay -->
          <div 
            class="play-overlay"
            v-show="activeTeacher !== index || !isPlaying"
          >
            <div class="play-button">
              <i class="fas fa-play"></i>
            </div>
          </div>

          <!-- Active Video Badge -->
          <div 
            v-show="activeTeacher === index && isPlaying"
            class="video-badge"
          >
            Video ko'rish
          </div>
        </div>

        <!-- Teacher Info -->
        <div class="teacher-info">
          <h3 class="teacher-name">{{ teacher.name }}</h3>
          <p class="teacher-description">{{ teacher.description }}</p>
        </div>

        <!-- Hover Triangle -->
        <div class="triangle-accent"></div>
      </div>
    </div>

    <!-- View All Button -->
    <div class="view-all-container">
      <button class="view-all-btn" @click="viewAllTeachers">
        Barchasini ko'rish
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTeachers',
  data() {
    return {
      activeTeacher: 1, // Second teacher is active by default
      isPlaying: false,
      videoProgress: 0,
      progressInterval: null,
      teachers: [
        {
          id: 1,
          name: 'Aliyev Samandar',
          description: 'Grafik va Web-dizayn kursi bo\'yicha',
          image: '/api/placeholder/280/200'
        },
        {
          id: 2,
          name: 'Aliyev Samandar',
          description: 'Grafik va Web-dizayn kursi bo\'yicha',
          image: '/api/placeholder/280/200'
        },
        {
          id: 3,
          name: 'Aliyev Samandar',
          description: 'Grafik va Web-dizayn kursi bo\'yicha',
          image: '/api/placeholder/280/200'
        },
        {
          id: 4,
          name: 'Aliyev Samandar',
          description: 'Grafik va Web-dizayn kursi bo\'yicha',
          image: '/api/placeholder/280/200'
        }
      ]
    }
  },
  methods: {
    selectTeacher(index) {
      if (this.activeTeacher === index && this.isPlaying) {
        this.pauseVideo();
      } else {
        this.activeTeacher = index;
        this.playVideo();
      }
    },
    playVideo() {
      this.isPlaying = true;
      this.videoProgress = 0;
      
      // Simulate video progress
      this.progressInterval = setInterval(() => {
        this.videoProgress += 2;
        if (this.videoProgress >= 100) {
          this.pauseVideo();
        }
      }, 100);
    },
    pauseVideo() {
      this.isPlaying = false;
      if (this.progressInterval) {
        clearInterval(this.progressInterval);
        this.progressInterval = null;
      }
    },
    toggleVideo() {
      if (this.isPlaying) {
        this.pauseVideo();
      } else {
        this.playVideo();
      }
    },
    viewAllTeachers() {
      this.$emit('view-all-teachers');
      console.log('Barchasini ko\'rish clicked');
    }
  },
  beforeUnmount() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }
}
</script>

<style scoped>
.teachers-container {
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
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.08), rgba(118, 75, 162, 0.08));
  animation: float 8s ease-in-out infinite;
}

.floating-element:nth-child(1) {
  width: 150px;
  height: 150px;
  top: 15%;
  left: -5%;
  animation-delay: 0s;
}

.floating-element:nth-child(2) {
  width: 200px;
  height: 200px;
  top: 50%;
  right: -8%;
  animation-delay: 2s;
}

.floating-element:nth-child(3) {
  width: 100px;
  height: 100px;
  top: 80%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  margin-bottom: 1rem;
}

.header h2::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  border-radius: 2px;
  margin: 1rem auto 0;
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
}

/* Teachers Grid */
.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Teacher Cards */
.teacher-card {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.teacher-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(118, 75, 162, 0.05));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.teacher-card:hover::before {
  opacity: 1;
}

.teacher-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(0, 212, 255, 0.3),
    0 0 30px rgba(0, 212, 255, 0.2);
}

/* Active State */
.teacher-card.active {
  border-color: rgba(0, 212, 255, 0.6);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 0 0 2px rgba(0, 212, 255, 0.4),
    0 0 40px rgba(0, 212, 255, 0.3);
  transform: translateY(-5px) scale(1.05);
}

.teacher-card.active::before {
  opacity: 1;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(118, 75, 162, 0.15));
}

/* Media Container */
.media-container {
  width: 100%;
  height: 200px;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.teacher-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.teacher-card:hover .teacher-image {
  transform: scale(1.1);
}

/* Video Container */
.video-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

.video-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.play-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.9);
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-btn:hover {
  background: rgba(0, 212, 255, 1);
  transform: scale(1.1);
}

.video-progress {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #00d4ff, #667eea);
  border-radius: 2px;
  transition: width 0.1s ease;
}

/* Play Overlay */
.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.teacher-card:hover .play-overlay {
  opacity: 1;
}

.play-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
}

/* Video Badge */
.video-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 212, 255, 0.9);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  animation: pulse-badge 2s infinite;
}

@keyframes pulse-badge {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Triangle Accent */
.triangle-accent {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid rgba(0, 212, 255, 0.8);
  opacity: 0;
  transition: all 0.3s ease;
  transform: rotate(45deg);
}

.teacher-card.active .triangle-accent {
  opacity: 1;
}

/* Teacher Info */
.teacher-info {
  text-align: center;
  color: white;
}

.teacher-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
}

.teacher-description {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

/* View All Button */
.view-all-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.view-all-btn {
  background: linear-gradient(135deg, #00d4ff, #667eea);
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 
    0 8px 25px rgba(0, 212, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
}

.view-all-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 
    0 15px 40px rgba(0, 212, 255, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2),
    0 0 30px rgba(0, 212, 255, 0.3);
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
  .teachers-container {
    padding: 1rem 0.5rem;
  }
  
  .teachers-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .header h2 {
    font-size: 2rem;
  }
  
  .media-container {
    height: 180px;
  }
  
  .teacher-card {
    padding: 1.2rem;
  }
  
  .view-all-btn {
    padding: 0.8rem 2rem;
    font-size: 0.9rem;
  }
}
</style>