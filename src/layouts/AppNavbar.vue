<template>
  <nav class="navbar" id="navbar" role="navigation" aria-label="Asosiy navigatsiya">
    <div class="nav-container">
      <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="/assets/logos/logo-textright__black.png" width="110" alt="DevOps">
        </router-link>
      <!-- Navigation Menu -->
      <div class="nav-menu">
        <!-- Kurslar Dropdown -->
        <div class="nav-item dropdown" @mouseenter="showDropdown('kurslar')" @mouseleave="hideDropdown('kurslar')">

          <button class="nav-link">
            Kurslar
            <svg class="dropdown-icon" :class="{ 'rotate': activeDropdown === 'kurslar' }" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <transition name="dropdown">
            <div v-if="activeDropdown === 'kurslar'" class="dropdown-menu">

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Monitor :size="24" />
                </div>
                <div>
                  <div class="item-title">Kompytuer Savodxonligi</div>
                  <div class="item-desc">2 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Award :size="24" />
                </div>
                <div>
                  <div class="item-title">Malaka Oshirish (Soha xodimlari)</div>
                  <div class="item-desc">1 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <BookOpen :size="24" />
                </div>
                <div>
                  <div class="item-title">Foundation (ITga kirish)</div>
                  <div class="item-desc">1 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Laptop :size="24" />
                </div>
                <div>
                  <div class="item-title">Front-End Dasturlash</div>
                  <div class="item-desc">8 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <PenTool :size="24" />
                </div>
                <div>
                  <div class="item-title">Grafik va Web dizayn</div>
                  <div class="item-desc">6 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Cuboid :size="24" />
                </div>
                <div>
                  <div class="item-title">3D Modeling (3D Max, AutoCad)</div>
                  <div class="item-desc">6 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Smartphone :size="24" />
                </div>
                <div>
                  <div class="item-title">SMM + Mobilografiya</div>
                  <div class="item-desc">3 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Calculator :size="24" />
                </div>
                <div>
                  <div class="item-title">1C Buxgalteriya</div>
                  <div class="item-desc">3 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Bot :size="24" />
                </div>
                <div>
                  <div class="item-title">Robototexnika</div>
                  <div class="item-desc">3 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <BookOpenCheck :size="24" />
                </div>
                <div>
                  <div class="item-title">IT English - Ingliz tili</div>
                  <div class="item-desc">6 oydan oshiqroq davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Sigma :size="24" />
                </div>
                <div>
                  <div class="item-title">Matematika</div>
                  <div class="item-desc">6 oydan oshiqroq davom etadi</div>
                </div>
              </a>

            </div>
          </transition>
        </div>

        <!-- Xizmatlar Dropdown -->
        <div class="nav-item dropdown" @mouseenter="showDropdown('xizmatlar')" @mouseleave="hideDropdown('xizmatlar')">
          <button class="nav-link">
            Xizmatlar
            <svg class="dropdown-icon" :class="{ 'rotate': activeDropdown === 'xizmatlar' }" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <transition name="dropdown">
            <div v-if="activeDropdown === 'xizmatlar'" class="dropdown-menu">
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Ruler :size="24" />
                </div>
                <div>
                  <div class="item-title">Grafik dizaynerlik ishlari</div>
                  <div class="item-desc">Logo, Vizitka, Post, ...</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Code :size="24" />
                </div>
                <div>
                  <div class="item-title">Websayt tayyorlash</div>
                  <div class="item-desc">Zamonaviy yechimga ega websaytlar yaratish</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Store :size="24" />
                </div>
                <div>
                  <div class="item-title">SMM xizmatlar</div>
                  <div class="item-desc">Biznesingizni bir qadam oldinga olib chiqish</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Globe :size="24" />
                </div>
                <div>
                  <div class="item-title">Online xizmatlar</div>
                  <div class="item-desc">Ijtimoiy tarmoq orqali qilinadigan ishlar</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Wrench :size="24" />  
                </div>
                <div>
                  <div class="item-title">Kompyuterni tamirlash</div>
                  <div class="item-desc">OS, Driverlar o'rnatish va boshqalar</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <User :size="24" />
                </div>
                <div>
                  <div class="item-title">Telegram Bot</div>
                  <div class="item-desc">Telegram bot va mini-applar yaratish</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <Laptop :size="24" />
                </div>
                <div>
                  <div class="item-title">Kompytuer sotuvi</div>
                  <div class="item-desc">Arzon narxda kompyuter va noutbuk sotuvi</div>
                </div>
              </a>
            </div>
            
          </transition>
        </div>

        <!-- Blog link -->
        <div class="nav-item">
          <router-link to="/blog" class="nav-link">
            Blog
          </router-link>
        </div>
      </div>

      <div class="nav-actions">
        <router-link to="/certificates">
          <button class="btn-ghost">
            Sertifikatlar
          </button>
        </router-link>
        <a href="tel:+998957781199" class="btn-royal">
          +998 95 778 11 99
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button 
        class="mobile-toggle" 
        @click="toggleMobileMenu" 
        :class="{ 'active': mobileMenuOpen }"
        aria-label="Mobil menyuni ochish/yopish"
      :aria-expanded="mobileMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="mobile-item">
          <button @click="toggleMobileDropdown('kurslar')" class="mobile-link">
            Kurslar
            <svg class="mobile-dropdown-icon" :class="{ 'rotate': mobileDropdowns.kurslar }" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <transition name="mobile-dropdown">
            <div v-if="mobileDropdowns.kurslar" class="mobile-submenu">
              <a href="#" class="mobile-sublink">Kompytuer Savodxonligi</a>
              <a href="#" class="mobile-sublink">Malaka Oshirish (Soha xodimlari)</a>
              <a href="#" class="mobile-sublink">Foundation (ITga kirish)</a>
              <a href="#" class="mobile-sublink">Front-End Dasturlash</a>
              <a href="#" class="mobile-sublink">Grafik va Web dizayn</a>
              <a href="#" class="mobile-sublink">3D Modeling (3D Max, AutoCad)</a>
              <a href="#" class="mobile-sublink">SMM + Mobilografiya</a>
              <a href="#" class="mobile-sublink">1C Buxgalteriya</a>
              <a href="#" class="mobile-sublink">Robototexnika</a>
              <a href="#" class="mobile-sublink">IT English - Ingliz tili</a>
              <a href="#" class="mobile-sublink">Matematika</a>
            </div>
          </transition>
        </div>
        
        <div class="mobile-item">
          <button @click="toggleMobileDropdown('xizmatlar')" class="mobile-link">
            Xizmatlar
            <svg class="mobile-dropdown-icon" :class="{ 'rotate': mobileDropdowns.xizmatlar }" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <transition name="mobile-dropdown">
<div v-if="mobileDropdowns.xizmatlar" class="mobile-submenu">
  <a href="#" class="mobile-sublink">Grafik dizaynerlik ishlari</a>
  <a href="#" class="mobile-sublink">Websayt tayyorlash</a>
  <a href="#" class="mobile-sublink">SMM xizmatlar</a>
  <a href="#" class="mobile-sublink">Online xizmatlar</a>
  <a href="#" class="mobile-sublink">Kompyuterni tamirlash</a>
  <a href="#" class="mobile-sublink">Telegram Bot</a>
  <a href="#" class="mobile-sublink">Kompytuer sotuvi</a>
</div>
          </transition>
        </div>

        <div class="mobile-actions">
          <div class="router-links">
            <router-link to="/certificates">
              <button class="mobile-cert-btn">Sertifikatlar</button>
            </router-link>
            <router-link to="/blog">
              <button class="mobile-cert-btn">Blog</button>
            </router-link>
          </div>
          <a href="tel:+998957781199" class="mobile-phone-btn">+998 95 778 11 99</a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Monitor, Award, BookOpen, Laptop, PenTool, Cuboid, Smartphone, Calculator, Bot, BookOpenCheck, Sigma, Ruler, Code, Store, Globe, Wrench, User } from 'lucide-vue-next'

const activeDropdown = ref<string | null>(null)
const mobileMenuOpen = ref(false)
const mobileDropdowns = reactive<Record<string, boolean>>({
  kurslar: false,
  xizmatlar: false
})

const showDropdown = (dropdown: string) => {
  activeDropdown.value = dropdown
}

const hideDropdown = (dropdown: string) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleMobileDropdown = (dropdown: string) => {
  mobileDropdowns[dropdown] = !mobileDropdowns[dropdown]
}
</script>

<style scoped>
/* Scoped layout rules */
.logo {
  display: flex;
  align-items: center;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-dark);
  font-weight: var(--weight-regular);
  font-size: var(--text-body);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-link:hover {
  color: var(--black);
}

.dropdown-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  background: var(--white);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  min-width: 300px;
  max-width: 350px;
  max-height: 500px;
  overflow-y: auto;
  border: 1px solid var(--gray-light);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  color: var(--gray-dark);
  text-decoration: none;
  border-bottom: 1px solid var(--bg-light);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: var(--bg-light);
}

.item-icon {
  font-size: 1.4rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: 8px;
  color: var(--black);
}

.item-title {
  font-weight: var(--weight-bold);
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.item-desc {
  font-size: 0.85rem;
  color: var(--gray-mid);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-toggle span {
  width: 25px;
  height: 2px;
  background: var(--black);
  transition: all 0.3s ease;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.mobile-menu {
  background: var(--white);
  padding: 2rem;
  border-top: 1px solid var(--gray-light);
  max-height: 80vh;
  overflow-y: auto;
}

.mobile-item {
  margin-bottom: 1rem;
}

.mobile-link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: var(--weight-bold);
  color: var(--black);
  cursor: pointer;
}

.mobile-submenu {
  background: var(--bg-light);
  border-radius: 12px;
  margin-top: 0.5rem;
  overflow: hidden;
}

.mobile-sublink {
  display: block;
  padding: 0.75rem 1.5rem;
  color: var(--gray-dark);
  text-decoration: none;
}

.mobile-actions {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Animations */
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
}

.mobile-dropdown-enter-active, .mobile-dropdown-leave-active {
  transition: max-height 0.3s ease;
}
.mobile-dropdown-enter-from, .mobile-dropdown-leave-to {
  max-height: 0;
}
.mobile-dropdown-enter-to, .mobile-dropdown-leave-from {
  max-height: 300px;
}

@media (max-width: 768px) {
  .nav-menu, .nav-actions {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}
</style>
