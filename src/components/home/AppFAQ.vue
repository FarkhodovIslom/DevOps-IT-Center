<template>
  <div class="section-breathing">
    <!-- Header -->
    <div class="text-center" style="margin-bottom: 3rem;">
      <h2 class="text-title font-bold text-black">Ko'p beriladigan savollar</h2>
    </div>

    <!-- Loading / Error States -->
    <div v-if="loading" class="text-center text-gray-mid">Yuklanmoqda...</div>
    <div v-else-if="error" class="text-center text-red">
      <p>{{ error }}</p>
      <button @click="fetchFaqs" class="btn-black mt-4">Qayta urinish</button>
    </div>

    <!-- FAQ Content -->
    <div v-else style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem;">
      <div 
        v-for="(item, index) in qaData" 
        :key="item.id"
        style="border-bottom: 1px solid var(--gray-light); overflow: hidden;"
      >
        <button 
          @click="toggleItem(index)"
          style="width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 0; background: none; border: none; cursor: pointer; text-align: left;"
        >
          <span style="font-size: 1.25rem; font-weight: var(--weight-medium); color: var(--black);">{{ item.question }}</span>
          <ChevronUp v-if="openItems[index]" :size="20" style="color: var(--gray-mid);" />
          <ChevronDown v-else :size="20" style="color: var(--gray-mid);" />
        </button>
        <div 
          v-show="openItems[index]"
          style="padding-bottom: 1.5rem; color: var(--gray-mid); font-size: 1rem; line-height: 1.6;"
        >
          {{ item.answer }}
        </div>
      </div>
      <div v-if="qaData.length === 0" class="text-center text-gray-mid">
        Hozircha savollar mavjud emas
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronUp, ChevronDown } from 'lucide-vue-next'

const openItems = ref<Record<number, boolean>>({})
const qaData = ref<{ id: number; question: string; answer: string }[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const getFallbackData = () => [
  { id: 1, question: "React kursida nimalar o'rgatiladi?", answer: "React kursida siz zamonaviy frontend development asoslarini o'rganasiz: komponentlar, hooks, state management, routing, va real loyihalar ustida ishlashni." },
  { id: 2, question: "Bootcamp foundation va standart dasturlash kurslarining farqi nimada?", answer: "Foundation kurs - bu dasturlash asoslari uchun, hech qanday tajriba talab qilmaydi." },
  { id: 3, question: '"DevOps IT Center" imtihon bilan qabul qiladimi?', answer: "Ha, bizda maxsus test va suhbat o'tkaziladi." }
]

const fetchFaqs = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/faqs/`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    qaData.value = data.map((item: { id: number; title: string; description?: string }) => ({
      id: item.id,
      question: item.title,
      answer: item.description || 'Javob mavjud emas'
    }))
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('FAQ fetch error:', err)
    error.value = `FAQ'larni yuklashda xatolik: ${message}`
    qaData.value = getFallbackData()
  } finally {
    loading.value = false
  }
}

const toggleItem = (index: number) => {
  openItems.value = { ...openItems.value, [index]: !openItems.value[index] }
}

onMounted(() => fetchFaqs())
</script>

<style scoped>
.text-center { text-align: center; }
.text-red { color: red; }
.mt-4 { margin-top: 1rem; }
.font-bold { font-weight: var(--weight-bold); }
.text-black { color: var(--black); }
.text-gray-mid { color: var(--gray-mid); }
</style>