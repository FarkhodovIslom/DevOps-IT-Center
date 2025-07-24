<template>
  <section class="contact">
    <div class="contact-container">
      <h2>Bizning manzilimiz</h2>
      
      <div class="contact-content">
        <div class="contact-info">
          <address class="contact-address">
            <p><strong>Uzbek Sunrise Qoribli PPT, Namozgoh ko'chasi, 40-uy</strong></p>
            <p>Namozgoh mahallasi, Toshkent sh.</p>
            <p>Mo'ljal: Chorsu bozori yonida</p>
            <p><strong>Telefon:</strong> +998 90 123 45 67</p>
            <p><strong>Email:</strong> info@devopsitcenter.uz</p>
          </address>
        </div>
        
        <div class="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d69.24!3d41.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzEyLjAiTiA2OcKwMTQnMjQuMCJF!5e0!3m2!1sen!2s!4v1234567890"
            width="100%" 
            height="300" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="DevOps IT Center location">
          </iframe>
        </div>
      </div>
      
      <div class="contact-cta">
        <h3>Kasb tanlanishida birinchi yordam bering!</h3>
        <p>Mutaxassislarimiz sizga bepul maslahat berishadi</p>
        <form class="contact-form">
          <input type="text" placeholder="Ismingiz" required>
          <input type="tel" placeholder="Telefon raqamingiz" required>
          <button type="submit">Bepul maslahat olish</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppContact'
}
</script>