<template>
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <div class="logo-section">
        <router-link to="/" class="logo">
          <img src="/assets/logos/logo-textright__white.png" width="110" alt="DevOps">
        </router-link>
      </div>

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
                  <i class="fa-solid fa-desktop"></i>
                </div>
                <div>
                  <div class="item-title">Kompytuer Savodxonligi</div>
                  <div class="item-desc">2 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-award"></i>
                </div>
                <div>
                  <div class="item-title">Malaka Oshirish (Soha xodimlari)</div>
                  <div class="item-desc">1 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-book-open"></i>
                </div>
                <div>
                  <div class="item-title">Foundation (ITga kirish)</div>
                  <div class="item-desc">1 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-laptop-code"></i>
                </div>
                <div>
                  <div class="item-title">Front-End Dasturlash</div>
                  <div class="item-desc">8 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-pen-nib"></i>
                </div>
                <div>
                  <div class="item-title">Grafik va Web dizayn</div>
                  <div class="item-desc">6 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-cube"></i>
                </div>
                <div>
                  <div class="item-title">3D Modeling (3D Max, AutoCad)</div>
                  <div class="item-desc">6 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-mobile"></i>
                </div>
                <div>
                  <div class="item-title">SMM + Mobilografiya</div>
                  <div class="item-desc">3 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-calculator"></i>
                </div>
                <div>
                  <div class="item-title">1C Buxgalteriya</div>
                  <div class="item-desc">3 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-robot"></i>
                </div>
                <div>
                  <div class="item-title">Robototexnika</div>
                  <div class="item-desc">3 oy davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-book-open-reader"></i>
                </div>
                <div>
                  <div class="item-title">IT English - Ingliz tili</div>
                  <div class="item-desc">6 oydan oshiqroq davom etadi</div>
                </div>
              </a>

              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-square-root-variable"></i>
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
                  <i class="fa-solid fa-pen-ruler"></i>
                </div>
                <div>
                  <div class="item-title">Grafik dizaynerlik ishlari</div>
                  <div class="item-desc">Logo, Vizitka, Post, ...</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-code"></i>
                </div>
                <div>
                  <div class="item-title">Websayt tayyorlash</div>
                  <div class="item-desc">Zamonaviy yechimga ega websaytlar yaratish</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-store"></i>
                </div>
                <div>
                  <div class="item-title">SMM xizmatlar</div>
                  <div class="item-desc">Biznesingizni bir qadam oldinga olib chiqish</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-globe"></i>
                </div>
                <div>
                  <div class="item-title">Online xizmatlar</div>
                  <div class="item-desc">Ijtimoiy tarmoq orqali qilinadigan ishlar</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-wrench"></i>  
                </div>
                <div>
                  <div class="item-title">Kompyuterni tamirlash</div>
                  <div class="item-desc">OS, Driverlar o'rnatish va boshqalar</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-user-astronaut"></i>
                </div>
                <div>
                  <div class="item-title">Telegram Bot</div>
                  <div class="item-desc">Telegram bot va mini-applar yaratish</div>
                </div>
              </a>
              <a href="#" class="dropdown-item">
                <div class="item-icon">
                  <i class="fa-solid fa-laptop"></i>
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

      <!-- Right Section -->
      <div class="nav-actions">
        <router-link to="/certificates">
          <button class="cert-btn">
            <i class="cert-icon fas fa-award" style="transform: translateY(3px);"></i>
            Sertifikatlar
          </button>
        </router-link>
        
        <a href="tel:+998957781199" class="phone-btn">
          <svg class="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          +998 95 778 11 99
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }">
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

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      activeDropdown: null,
      mobileMenuOpen: false,
      mobileDropdowns: {
        kurslar: false,
        xizmatlar: false
      }
    }
  },
  methods: {
    showDropdown(dropdown) {
      this.activeDropdown = dropdown;
    },
    hideDropdown(dropdown) {
      if (this.activeDropdown === dropdown) {
        this.activeDropdown = null;
      }
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    toggleMobileDropdown(dropdown) {
      this.mobileDropdowns[dropdown] = !this.mobileDropdowns[dropdown];
    }
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 0.1px solid #19134f1c;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 70px;
}

/* Logo Section */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transform: translateY(0.6px);
  filter: saturate(150%) brightness(140%);
}


.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.5px;
}

.logo-subtitle {
  font-size: 0.875rem;
  color: #e0e7ff;
  font-weight: 600;
  margin-left: -0.5rem;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
}

/* Navigation Menu */
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
  color: white;
  font-weight: 600;
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.dropdown-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

/* Dropdown Menu - Обновленная версия для поддержки большего количества элементов */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 350px;
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* Добавляем кастомный скроллбар */
  scrollbar-width: thin;
  scrollbar-color: #667eea #f1f1f1;
}

/* Кастомный скроллбар для Webkit браузеров */
.dropdown-menu::-webkit-scrollbar {
  width: 6px;
}

.dropdown-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.dropdown-menu::-webkit-scrollbar-thumb {
  background: #667eea;
  border-radius: 10px;
}

.dropdown-menu::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.5rem;
  color: #374151;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f3f4f6;
  position: relative;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateX(5px);
}

.item-icon {
  font-size: 1.4rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.dropdown-item:hover .item-icon {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.item-title {
  font-weight: 600;
  font-size: 0.92rem;
  margin-bottom: 0.25rem;
  line-height: 1.2;
}

.item-desc {
  font-size: 0.78rem;
  opacity: 0.7;
  line-height: 1.3;
}

/* Nav Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cert-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.cert-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.cert-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.phone-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #00d4ff;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
}

.phone-btn:hover {
  background: #0099cc;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
}

.phone-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Mobile Toggle */
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
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu - Updated */
.mobile-menu {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
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
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.mobile-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.mobile-dropdown-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.mobile-dropdown-icon.rotate {
  transform: rotate(180deg);
}

.mobile-submenu {
  background: #f8fafc;
  border-radius: 0.75rem;
  margin-top: 0.5rem;
  overflow: hidden;
  max-height: 300px;
  overflow-y: auto;
}

.mobile-sublink {
  display: block;
  padding: 0.75rem 1.5rem;
  color: #6b7280;
  text-decoration: none;
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.mobile-sublink:last-child {
  border-bottom: none;
}

.mobile-sublink:hover {
  background: #667eea;
  color: white;
}

.mobile-actions {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-actions .router-links {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.mobile-cert-btn, .mobile-phone-btn {
  padding: 1rem;
  border-radius: 0.75rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.mobile-cert-btn {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.55, 1);
}
.mobile-cert-btn:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #fff;
  cursor: pointer;
  width: 100%;
}

.mobile-phone-btn {
  background: #00d4ff;
  color: white;
}

/* Animations */
.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-dropdown-enter-active, .mobile-dropdown-leave-active {
  transition: all 0.3s ease;
}

.mobile-dropdown-enter-from, .mobile-dropdown-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-dropdown-enter-to, .mobile-dropdown-leave-from {
  opacity: 1;
  max-height: 300px;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu, .nav-actions {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .nav-container {
    padding: 0 1rem;
  }
  
  .logo-text {
    font-size: 1.25rem;
  }
  
  .logo-subtitle {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .logo-subtitle {
    display: none;
  }
  
  .mobile-menu {
    padding: 1.5rem;
  }
}

/* Дополнительные стили для больших экранов когда дропдаун может быть длинным */
@media (min-height: 800px) {
  .dropdown-menu {
    max-height: 600px;
  }
}
</style>