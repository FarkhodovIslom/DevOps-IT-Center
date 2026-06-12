<template>
  <section class="section-breathing bg-gray">
    <div style="text-align: center; margin-bottom: 4rem;">
      <h2 class="text-title font-bold text-black">Bizning Mentorlar</h2>
      <p class="text-gray-mid mt-4" style="font-size: 1.25rem;">
        Soha ekspertlaridan ta'lim oling
      </p>
    </div>

    <div class="mentors-grid">
      <div 
        v-for="mentor in mentors" 
        :key="mentor.id"
        class="mentor-card"
      >
        <div class="mentor-photo">
          <img :src="mentor.photo" :alt="mentor.name">
        </div>
        <div class="mentor-info">
          <h3 class="mentor-name">{{ mentor.name }}</h3>
          <p class="mentor-role">{{ mentor.role }}</p>
          <div class="mentor-company">
            {{ mentor.company }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mentors = [
  { id: 1, name: 'Sardor Akhmedov', role: 'Senior Frontend Developer', company: 'Tech Lead at Epam', photo: '/assets/images/student__card-image.png' },
  { id: 2, name: 'Aziz Rakhimov', role: 'Backend Architect', company: 'Ex-Yandex', photo: '/assets/images/student__card-image.png' },
  { id: 3, name: 'Malika Umarova', role: 'Lead Product Designer', company: 'Uzum Market', photo: '/assets/images/student__card-image.png' },
  { id: 4, name: 'Jahongir Toirov', role: 'Digital Marketing Head', company: 'Click Uzbekistan', photo: '/assets/images/student__card-image.png' }
]
</script>

<style scoped>
.bg-gray { background-color: var(--bg-light); }
.font-bold { font-weight: var(--weight-bold); }
.text-black { color: var(--black); }
.text-gray-mid { color: var(--gray-mid); }
.mt-4 { margin-top: 1rem; }

.mentors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 3rem;
}

.mentor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.mentor-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background-color: var(--gray-light);
  border: 1px solid var(--gray-light);
  filter: grayscale(100%);
  transition: filter 0.4s ease, transform 0.4s ease;
}

.mentor-card:hover .mentor-photo {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.mentor-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mentor-name {
  font-size: 1.25rem;
  font-weight: var(--weight-bold);
  color: var(--black);
  margin-bottom: 0.25rem;
}

.mentor-role {
  color: var(--gray-mid);
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.mentor-company {
  font-size: 0.85rem;
  font-weight: var(--weight-bold);
  color: var(--royal-blue, #0A2558);
  background-color: rgba(10, 37, 88, 0.05);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  display: inline-block;
}
</style>
