<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          Kelajak kasblariga bo'lgan qiziqing!
        </h1>
        <p class="hero-description">
          Zamonaviy texnologiyalar bozida eng zaruratli kompyuter ustozlar jahonidaki 
          dasturiy ta'minotlash tanish professional mutaxassislarni rivojlantirishga 
          yordam berish uchun mukammal platformani taklif etamiz.
        </p>
        <button class="hero-cta">Kurslarni ko'rish</button>
      </div>
      <div class="hero-form">
        <h3>Bepul konsultatsiya</h3>
        <form class="consultation-form">
          <input type="text" placeholder="Ismingiz" required>
          <input type="tel" placeholder="Telefon raqamingiz" required>
          <button type="submit">Bepul maslahat</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppHero'
}
</script>