<template>
  <section id="courses" class="section-breathing">
    <div style="text-align: center; margin-bottom: 4rem;">
      <h2 class="text-title font-bold text-black">Barcha kurslar</h2>
      <p class="text-gray-mid mt-4" style="font-size: 1.25rem;">
        Noldan boshlab professional darajagacha
      </p>
    </div>

    <div class="courses-grid">
      <div 
        v-for="course in courses" 
        :key="course.id"
        class="course-card"
      >
        <div class="course-header">
          <div class="course-icon">
            <component :is="course.icon" :size="28" />
          </div>
          <span class="course-level">{{ course.level }}</span>
        </div>
        
        <div class="course-body">
          <h3 class="course-title">{{ course.title }}</h3>
          <p class="course-desc">{{ course.description }}</p>
        </div>
        
        <div class="course-footer">
          <div class="course-meta">
            <Clock :size="16" /> {{ course.duration }}
          </div>
          <a href="#contact" class="course-link">Batafsil &rarr;</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Clock, Monitor, Rocket, FileCode2, Server, Palette, Share2 } from 'lucide-vue-next'

const courses = [
  { id: 1, title: 'Kompyuter savodxonligi', description: 'Microsoft Office va asosiy ko\'nikmalar', icon: Monitor, duration: '2 oy', level: 'Beginner' },
  { id: 2, title: 'Foundation', description: 'IT sohasiga kirish uchun asosiy bilimlar', icon: Rocket, duration: '3 oy', level: 'Beginner' },
  { id: 3, title: 'Front-End dasturlash', description: 'HTML, CSS, JavaScript, React/Vue asoslari', icon: FileCode2, duration: '5 oy', level: 'Intermediate' },
  { id: 4, title: 'Back-End dasturlash', description: 'Node.js, Python yoki Java yordamida server qismini yaratish', icon: Server, duration: '6 oy', level: 'Advanced' },
  { id: 5, title: 'Grafik va web-dizayn', description: 'Zamonaviy UI/UX va grafik dizayn texnologiyalari', icon: Palette, duration: '4 oy', level: 'Intermediate' },
  { id: 6, title: 'SMM + Mediagrafiya', description: 'Ijtimoiy tarmoqlar marketingi va brending', icon: Share2, duration: '2 oy', level: 'Beginner' }
]
</script>

<style scoped>
.font-bold { font-weight: var(--weight-bold); }
.text-black { color: var(--black); }
.text-gray-mid { color: var(--gray-mid); }
.mt-4 { margin-top: 1rem; }

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.course-card {
  background-color: var(--white);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid var(--gray-light);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  border-color: var(--gray-muted);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.course-icon {
  width: 56px;
  height: 56px;
  background-color: var(--bg-light);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--black);
}

.course-level {
  font-size: 0.85rem;
  font-weight: var(--weight-bold);
  color: var(--gray-mid);
  background-color: var(--bg-light);
  padding: 0.4rem 1rem;
  border-radius: 20px;
}

.course-body {
  flex: 1;
  margin-bottom: 2rem;
}

.course-title {
  font-size: 1.5rem;
  font-weight: var(--weight-bold);
  color: var(--black);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.course-desc {
  color: var(--gray-mid);
  font-size: 1rem;
  line-height: 1.5;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-light);
}

.course-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-muted);
  font-size: 0.95rem;
  font-weight: var(--weight-bold);
}

.course-link {
  color: var(--black);
  text-decoration: none;
  font-weight: var(--weight-bold);
  font-size: 0.95rem;
  transition: opacity 0.2s;
}

.course-link:hover {
  opacity: 0.7;
}
</style>