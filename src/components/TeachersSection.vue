<template>
  <div class="teachers-container">
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
          image: '/assets/images/student__card-image.jpg'
        },
        {
          id: 2,
          name: 'Aliyev Samandar',
          description: 'Grafik va Web-dizayn kursi bo\'yicha',
          image: '/assets/images/student__card-image.jpg'
        },
        {
          id: 3,
          name: 'Aliyev Samandar',
          description: 'Grafik va Web-dizayn kursi bo\'yicha',
          image: '/assets/images/student__card-image.jpg'
        },
        {
          id: 4,
          name: 'Aliyev Samandar',
          description: 'Grafik va Web-dizayn kursi bo\'yicha',
          image: '/assets/images/student__card-image.jpg'
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
  max-width: 100%;
  margin: 1rem 0 0 0 ;
  padding: 4rem 2.5rem 2rem 2.5rem;
  min-height: 80vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
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

/* Teachers Grid */
.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Teacher Cards */
.teacher-card {
  background: #ffffffca;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 1px 8px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.teacher-card:hover {
  transform: translateY(-10px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 5px 20px rgba(0, 212, 255, 0.2);
}

/* Active State */
/* .teacher-card.active {
  border: 2px solid #00d4ff;
  box-shadow: 
    0 15px 50px rgba(0, 0, 0, 0.15),
    0 0 0 4px rgba(0, 212, 255, 0.1),
    0 0 30px rgba(0, 212, 255, 0.3);
  transform: translateY(-8px) scale(1.02);
} */

/* Media Container */
.media-container {
  width: 100%;
  height: 220px;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.teacher-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.teacher-card:hover .teacher-image {
  transform: scale(1.05);
}

/* Video Container */
.video-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.video-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.play-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #00d4ff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.play-btn:hover {
  background: white;
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.video-progress {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0.8));
  border-radius: 3px;
  transition: width 0.1s ease;
}

/* Play Overlay */
.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
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
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.8);
}

/* Video Badge */
.video-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 212, 255, 0.95);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
  animation: pulse-badge 2s infinite;
}

@keyframes pulse-badge {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Teacher Info */
.teacher-info {
  text-align: center;
  color: #333;
}

.teacher-name {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.teacher-description {
  font-size: 1rem;
  color: #718096;
  line-height: 1.5;
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
  .teachers-container {
    padding: 2rem 1rem;
  }
  
  .teachers-grid {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  
  .header h2 {
    font-size: 2.2rem;
  }
  
  .media-container {
    height: 200px;
  }
  .teacher-card {
    display: none;
  }
  .teacher-card:nth-child(1),
  .teacher-card:nth-child(2)  {
    display: block;
  }
  .teacher-card {
    padding: 1.5rem;
  }
  
  .view-all-btn {
    padding: 1rem 2.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .teachers-container {
    padding: 1.5rem 0.8rem;
  }

  .teachers-grid {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(220px, 190px));
    gap: 1.5rem;
  }
  
  .header h2 {
    font-size: 1.8rem;
  }
  
  .teacher-card {
    padding: 1.2rem;
  }
  
  .media-container {
    height: 180px;
  }
  
  .view-all-btn {
    padding: 0.9rem 2rem;
    font-size: 0.95rem;
  }
}
</style>