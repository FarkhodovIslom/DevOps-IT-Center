<template>
  <div id="app">
    <Loader />
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
import Loader from './components/ui/loader.vue'
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
    Loader,
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