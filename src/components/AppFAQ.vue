<template>
  <div class="qa-section">
    <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">Ko'p beriladigan savollar</h2>
      </div>
    <div class="qa-container">
      <div 
        v-for="(item, index) in qaData" 
        :key="index"
        class="qa-item"
        :class="{ 'active': openItems[index] }"
      >
        <div 
          class="qa-question"
          @click="toggleItem(index)"
        >
          <span class="question-text">{{ item.question }}</span>
          <div class="icon-container">
            <svg 
              v-if="!openItems[index]"
              class="icon"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <svg 
              v-else
              class="icon"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
            </svg>
          </div>
        </div>
        <div 
          class="qa-answer"
          :class="{ 'open': openItems[index] }"
        >
          <div class="answer-content">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppQA',
  data() {
    return {
      openItems: {},
      qaData: [
        {
          question: "React kursida nimalar o'rgatiladi?",
          answer: "React kursida siz zamonaviy frontend development asoslarini o'rganasiz: komponentlar, hooks, state management, routing, va real loyihalar ustida ishlashni. Kurs oxirida to'liq web ilovalar yarata olasiz."
        },
        {
          question: "Bootcamp foundation va standart dasturlash kurslarining farqi nimada?",
          answer: "Foundation kurs - bu dasturlash asoslari uchun, hech qanday tajriba talab qilmaydi. Standart kurslar esa maxsus texnologiyalar bo'yicha chuqur bilim beradi va asosiy bilimlar talab qiladi."
        },
        {
          question: "\"DevOps IT Center\" imtihon bilan qabul qiladimi?",
          answer: "Ha, bizda maxsus test va suhbat o'tkaziladi. Bu sizning hozirgi bilim darajangizni aniqlash va to'g'ri kursni tanlash uchun kerak."
        },
        {
          question: "\"DevOps IT Center\" qayerda joylashgan?",
          answer: "Bizning asosiy filialimiz Toshkent shahrida joylashgan. Shuningdek, onlayn formatda ham kurslar mavjud."
        },
        {
          question: "\"DevOps IT Center\"da qanday kurslar bor?",
          answer: "Bizda Frontend (React, Vue), Backend (Node.js, Python), DevOps, Mobile development va Data Science bo'yicha kurslar mavjud. Har bir yo'nalish bo'yicha boshlang'ich va ilg'or darajadagi dasturlar bor."
        },
        {
          question: "Til kurslari bormi?",
          answer: "Ha, IT sohasida ishlash uchun zarur bo'lgan ingliz tili kurslari ham mavjud. Bu kurslar texnik ingliz tiliga e'tibor qaratilgan."
        },
        {
          question: "\"DevOps IT Center\" ish bilan ta'minlaydimi?",
          answer: "Kursni muvaffaqiyatli tugatgan o'quvchilarimizga ish topishda yordam beramiz. Bizning hamkor kompaniyalarimiz bilan aloqa o'rnatamiz va CV tayyorlashda ko'maklashamiz."
        }
      ]
    }
  },
  methods: {
    toggleItem(index) {
      // Vue 3 compatible way
      this.openItems = {
        ...this.openItems,
        [index]: !this.openItems[index]
      };
    }
  }
}
</script>

<style scoped>
.qa-section {
  max-width: 100%;
  height: fit-content;
  margin: 0 auto;
  padding: 55px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: linear-gradient(135deg, #f4f6f8 0%, #e2e8f0 100%);
}

.qa-container {
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

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

/* Tablet and larger screens */
@media (min-width: 768px) {
  .qa-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Large screens */
@media (min-width: 1200px) {
  .qa-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

.qa-item {
  background: #f3f6f8;
  border-radius: 16px;
  border: none;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    9px 9px 12px rgba(163, 177, 198, 0.6),
    -9px -9px 12px #e7e6e688;
  margin-bottom: 0;
  height: fit-content;
}

.qa-item:hover {
  box-shadow: 
    6px 6px 10px #a3b1c677,
    -6px -6px 10px #e3e2e2c9;
  transform: translateY(-2px);
}

.qa-item.active {
  box-shadow: 
    inset 4px 4px 8px rgba(163, 177, 198, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.5);
}

.qa-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s ease;
  min-height: 60px;
}

.qa-question:hover {
  background: rgba(255, 255, 255, 0.1);
}

.question-text {
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  line-height: 1.5;
  padding-right: 16px;
  flex: 1;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.icon {
  width: 20px;
  height: 20px;
  color: #4a5568;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.qa-item.active .icon {
  color: #3182ce;
  transform: rotate(180deg);
}

.qa-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
}

.qa-answer.open {
  max-height: 300px;
  padding: 0 24px 24px 24px;
  opacity: 1;
}

.answer-content {
  color: #4a5568;
  font-size: 15px;
  line-height: 1.7;
  padding-top: 8px;
}

/* Mobile responsive */
@media (max-width: 767px) {
  .qa-section {
    padding: 16px;
  }
  
  .qa-container {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .qa-question {
    padding: 16px 20px;
    min-height: 50px;
  }
  
  .question-text {
    font-size: 15px;
    padding-right: 12px;
  }
  
  .qa-answer.open {
    padding: 0 20px 20px 20px;
  }
  
  .answer-content {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .qa-section {
    padding: 12px;
  }
  
  .qa-container {
    gap: 10px;
  }
  
  .qa-question {
    padding: 14px 16px;
  }
  
  .question-text {
    font-size: 14px;
  }
  
  .qa-answer.open {
    padding: 0 16px 16px 16px;
  }
  
  .icon {
    width: 18px;
    height: 18px;
  }
}
</style>