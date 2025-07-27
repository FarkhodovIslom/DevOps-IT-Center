<template>
  <div id="app">
    <AppNavbar />
    <main>
      <AppHero />
      <AppServices />
      <BenefitsSection />
      <AppCourses />
      <TeachersSection />
      <AppLocation />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppHero from './components/AppHero.vue'
import AppServices from './components/AppServices.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import AppCourses from './components/AppCourses.vue'
import AppLocation from './components/AppLocation.vue'
import TeachersSection from './components/TeachersSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppHero,
    AppServices,
    BenefitsSection,
    AppCourses,
    AppLocation,
    TeachersSection,
    ContactSection,
    AppFooter
  }
}
</script>