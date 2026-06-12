<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-content">
        <!-- Left Section - Logo & Contact -->
        <div class="footer-section footer-brand">
          <div class="logo-container">
            <a href="/#" class="logo">
                <img src="/assets/logos/logo-textright__black.png" alt="DevOps IT Center logotipi">
            </a>
          </div>
          
          <div class="contact-info">
            <a href="tel:+998957781199" class="phone-link">
              +998 (95) 778 11 99
            </a>
            <a href="tel:+998885781199" class="phone-link">
              +998 (88) 578 11 99
            </a>
            <p class="address">
              Urgut shaharchasi, Do'stlik MFY,<br>
              Navoiyshox ko'chasi 120-uy
            </p>
          </div>
        </div>

        <!-- Middle Section - Links -->
        <div class="footer-section footer-links">
          <h4 class="section-title">Ma'lumotlar</h4>
          <ul class="link-list">
            <li><a href="#courses" class="footer-link">Kurslar</a></li>
            <li><a href="#services" class="footer-link">Xizmatlar</a></li>
            <li><router-link to="/blog" class="footer-link">Blog</router-link></li>
            <li><router-link to="/certificates" class="footer-link">Sertifikatlar</router-link></li>
            <li><a href="#about" class="footer-link">Biz haqimizda</a></li>
          </ul>
        </div>

        <!-- Right Section - Certificates -->
        <div class="footer-section footer-certificates">
          <div class="certificates-grid">
            <div class="certificate-item">
              <a href="/assets/images/certificate__footer-card.png" target="_blank" class="certificate-image">
                <img src="/assets/images/certificate__footer-card.png" alt="">
              </a>
              <span class="certificate-label">Guvohnoma</span>
            </div>
            <div class="certificate-item">
              <a href="/assets/images/residency__footer-card.png" target="_blank" class="certificate-image">
                <img src="/assets/images/residency__footer-card.png" alt="it_park_rezidency">
              </a>
              <span class="certificate-label">IT Park rezidentlik</span>
            </div>
            <div class="certificate-item">
              <a href="/assets/images/confirmation__footer-card.png" target="_blank" class="certificate-image">
                <img src="/assets/images/confirmation__footer-card.png" alt="confirmation">
              </a>
              <span class="certificate-label">Tasdiqlama</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>© DevOps IT Center 2024. Barcha huquqlar himoyalangan</p>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link instagram" aria-label="Instagram">
              <Instagram :size="20" />
            </a>
            <a href="#" class="social-link telegram" aria-label="Telegram">
              <Send :size="20" />
            </a>
            <a href="#" class="social-link facebook" aria-label="Facebook">
              <Facebook :size="20" />
            </a>
            <a href="#" class="social-link youtube" aria-label="YouTube">
              <Youtube :size="20" />
            </a>
          </div>
        </div>
      </div>

      <!-- Back to Top Button -->
      <button class="back-to-top" @click="scrollToTop" aria-label="Yuqoriga qaytish">
        <ChevronUp :size="24" />
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Send, Facebook, Youtube, ChevronUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--white);
  color: var(--black);
  border-top: 1px solid var(--gray-light);
  overflow: hidden;
}

.footer-container {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 4rem var(--gutter) 2rem;
}

/* Main Content */
.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.logo img {
  width: 120px;
}

.contact-info {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.phone-link {
  color: var(--black);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: var(--weight-bold);
  transition: opacity 0.25s ease;
}

.phone-link:hover {
  opacity: 0.7;
}

.address {
  color: var(--gray-mid);
  line-height: 1.5;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* Links Section */
.footer-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-title {
  font-size: 1.2rem;
  font-weight: var(--weight-bold);
  color: var(--black);
  margin-bottom: 1rem;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  color: var(--gray-mid);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.25s ease;
}

.footer-link:hover {
  color: var(--black);
}

/* Certificates Section */
.footer-certificates {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.certificate-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  text-align: center;
}

.certificate-image {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
  transition: transform 0.25s ease;
  margin-bottom: .2rem;
}

.certificate-item:hover .certificate-image {
  transform: translateY(-5px);
}

.certificate-label {
  font-size: 0.8rem;
  color: var(--gray-mid);
  line-height: 1.3;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid var(--gray-light);
  padding-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  color: var(--gray-mid);
  font-size: 0.9rem;
  margin: 0;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--black);
  transition: background-color 0.25s ease;
  background: var(--bg-light);
}

.social-link:hover {
  background-color: var(--gray-light);
}

.back-to-top {
  position: absolute;
  bottom: 2rem;
  right: var(--gutter);
  width: 44px;
  height: 44px;
  background: var(--bg-light);
  border: none;
  border-radius: 50%;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease;
}

.back-to-top:hover {
  background: var(--gray-light);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
  .footer-certificates {
    grid-column: span 2;
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .footer-certificates {
    grid-column: span 1;
  }
  .footer-bottom-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  .back-to-top {
    position: static;
    margin: 2rem auto 0;
  }
}
</style>