<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-content">
        <!-- Left Section - Logo & Contact -->
        <div class="footer-section footer-brand">
          <div class="logo-container">
            <a href="/#" class="logo">
                <img src="../../public/assets/logos/logo-textright__white.png" alt="">
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
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link telegram" aria-label="Telegram">
              <i class="fab fa-telegram-plane"></i>
            </a>
            <a href="#" class="social-link facebook" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link youtube" aria-label="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Gradient -->
    <div class="footer-bg"></div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  background: #2c3e50;
  color: white;
  overflow: hidden;
}

.footer-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.1;
  z-index: 1;
}

.footer-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 0;
}

/* Main Content */
.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

/* Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
}

.logo img {
  width: 100px;
  padding: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.phone-link {
  color: #00d4ff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
}

.phone-link:hover {
  color: #ffffff;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.6);
  transform: translateX(5px);
}

.address {
  color: rgba(255, 255, 255, 0.8);
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
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  border-radius: 2px;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #00d4ff, #667eea);
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: white;
  padding-left: 20px;
}

.footer-link:hover::before {
  width: 10px;
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
  transition: all 0.3s ease;
  margin-bottom: .2rem;
}


.certificate-item:hover .certificate-image {
  background: rgba(0, 212, 255, 0.2);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  transform: translateY(-5px);
}

.certificate-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.3;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  color: rgba(255, 255, 255, 0.7);
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
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.social-link i {
  font-size: 1.1rem;
}

.social-link.instagram {
  color: #E4405F;
}

.social-link.telegram {
  color: #0088cc;
}

.social-link.facebook {
  color: #1877F2;
}

.social-link.youtube {
  color: #FF0000;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border-color: currentColor;
  background: rgba(255, 255, 255, 0.2);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-certificates {
    grid-column: span 2;
    justify-content: center;
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 2rem 1rem 0;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-certificates {
    grid-column: span 1;
  }
  
  .certificates-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .logo {
    justify-content: center;
  }
  
  .contact-info {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .certificates-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .certificate-item {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
  
  .certificate-image {
    width: 50px;
    height: 50px;
  }
  
  .certificate-image i {
    font-size: 1.2rem;
  }
  
  .social-links {
    gap: 0.8rem;
  }
  
  .social-link {
    width: 35px;
    height: 35px;
  }
  
  .social-link i {
    font-size: 1rem;
  }
}
</style>