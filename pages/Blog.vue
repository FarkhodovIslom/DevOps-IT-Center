<template>
  <div class="blog-container">
    <div class="blog-header">
      <h1 class="blog-title">Blog</h1>
      <p class="blog-subtitle">Oxirgi maqolalar va yangiliklar</p>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Postlar yuklanmoqda...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="error">
      <p>Xatolik yuz berdi</p>
      <button @click="fetchBlogs" class="retry-btn">Qayta urinib ko'rish</button>
    </div>

    <!-- Blog list -->
    <div v-else class="blog-grid">
      <div
        v-for="blog in blogs"
        :key="blog.id"
        class="blog-card"
        @click="selectBlog(blog)"
        :class="{ active: selectedBlog?.id === blog.id }"
      >
        <div v-if="blog.images && blog.images.length > 0" class="blog-image">
          <img :src="blog.images[0].image" :alt="blog.title" />
        </div>
        
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-type">{{ blog.type || 'Maqola' }}</span>
            <span class="blog-views"><i class="fas fa-eye"></i> {{ formatViews(blog.views) }}</span>
          </div>
          
          <h3 class="blog-card-title">{{ blog.title }}</h3>
          
          <p class="blog-excerpt">
            {{ truncateText(stripHtml(blog.body), 120) }}
          </p>
          
          <div class="blog-date">
            {{ formatDate(blog.created_at) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Selected blog modal -->
    <div v-if="selectedBlog" class="blog-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">
            <i class="fa-solid fa-xmark"></i>
        </button>
        
        <div v-if="selectedBlog.images && selectedBlog.images.length > 0" class="modal-image">
          <img :src="selectedBlog.images[0].image" :alt="selectedBlog.title" />
        </div>
        
        <div class="modal-body">
          <div class="modal-meta">
            <span class="blog-type">{{ selectedBlog.type || 'Maqola' }}</span>
            <span class="blog-views"><i class="fas fa-eye"></i> {{ formatViews(selectedBlog.views) }}</span>
            <span class="blog-date">{{ formatDate(selectedBlog.created_at) }}</span>
          </div>
          
          <h2 class="modal-title">{{ selectedBlog.title }}</h2>
          
          <div class="modal-text" v-html="formatBody(selectedBlog.body)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const blogs = ref([])
const selectedBlog = ref(null)
const loading = ref(false)
const error = ref(null)

const fetchBlogs = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await fetch('https://devops-itc.alwaysdata.net/api/blogs/')
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    blogs.value = await response.json()
  } catch (err) {
    error.value = err.message
    console.error('Blogni yuklashda xatolik bor. Error:', err)
  } finally {
    loading.value = false
  }
}

const selectBlog = (blog) => {
  selectedBlog.value = blog
}

const closeModal = () => {
  selectedBlog.value = null
}

const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M'
  }
  if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'K'
  }
  return views.toString()
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const truncateText = (text, length) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

// HTML teglarni o'chirish
const stripHtml = (html) => {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}

// HTML kontentni to'g'ri format qilish
const formatBody = (body) => {
  if (!body) return ''
  
  // Agar body HTML teglari bilan kelsa, ularni to'g'ri parse qilish
  return body
    .replace(/\n/g, '<br>')  // Yangi qatorlarni <br> ga aylantirish
    .replace(/&nbsp;/g, ' ') // &nbsp; ni oddiy bo'shliqqa aylantirish
}

onMounted(() => {
  fetchBlogs()
})
</script>

<style scoped>
.blog-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
}

.blog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.blog-title {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.blog-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.loading, .error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: white;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.retry-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.retry-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.blog-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.blog-card.active {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 1.5rem;
  color: white;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.85rem;
}

.blog-type {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 500;
}

.blog-views {
  color: rgba(255, 255, 255, 0.8);
}

.blog-card-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  line-height: 1.4;
  color: white;
}

.blog-excerpt {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.blog-date {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.blog-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

::-webkit-scrollbar {
    visibility: hidden;
}

.modal-content {
  background: rgba(255, 255, 255, 0.043);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;
}

.close-btn i {
    color: white;
    width: fit-content;
    height: fit-content;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.modal-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 2rem;
  color: white;
}

.modal-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  flex-wrap: wrap;
}

.modal-title {
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 2rem 0;
  line-height: 1.3;
  color: white;
}

.modal-text {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .blog-container {
    padding: 1rem;
  }
  
  .blog-title {
    font-size: 2rem;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
}
</style>