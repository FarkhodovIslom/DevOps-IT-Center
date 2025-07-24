<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <img src="/logo.svg" alt="DevOps IT Center" class="footer-logo">
        <div class="footer-contact">
          <p>+998 (90) 123 45 67</p>
          <p>+998 (93) 123 45 67</p>
          <p>info@devopsitcenter.uz</p>
        </div>
      </div>
      
      <nav class="footer-nav">
        <div class="footer-column">
          <h4>Kompaniya</h4>
          <ul>
            <li><a href="#about">Biz haqimizda</a></li>
            <li><a href="#courses">Kurslar</a></li>
            <li><a href="#instructors">O'qituvchilar</a></li>
            <li><a href="#contact">Kontaktlar</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h4>Kurslar</h4>
          <ul>
            <li><a href="#frontend">Frontend</a></li>
            <li><a href="#backend">Backend</a></li>
            <li><a href="#design">Dizayn</a></li>
            <li><a href="#marketing">Marketing</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h4>Qo'llab-quvvatlash</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#support">Yordam</a></li>
            <li><a href="#privacy">Maxfiylik</a></li>
            <li><a href="#terms">Shartlar</a></li>
          </ul>
        </div>
      </nav>
      
      <div class="footer-social">
        <h4>Bizni kuzatib boring</h4>
        <div class="social-links">
          <a href="#" aria-label="Telegram"><i class="icon-telegram"></i></a>
          <a href="#" aria-label="Instagram"><i class="icon-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i class="icon-facebook"></i></a>
          <a href="#" aria-label="YouTube"><i class="icon-youtube"></i></a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2024 DevOps IT Center. Barcha huquqlar himoyalangan.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>