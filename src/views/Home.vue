<template>
  <main>
    <AppHero />
    <AppServices />
    <BenefitsSection />
    <AppCourses />
    <TeachersSection />
    <AppLocation />
    <ContactSection />
  </main>
</template>

<script>
import AppHero from '../components/AppHero.vue'
import AppServices from '../components/AppServices.vue'
import BenefitsSection from '../components/BenefitsSection.vue'
import AppCourses from '../components/AppCourses.vue'
import AppLocation from '../components/AppLocation.vue'
import TeachersSection from '../components/TeachersSection.vue'
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'Home',
  components: {
    AppHero,
    AppServices,
    BenefitsSection,
    AppCourses,
    AppLocation,
    TeachersSection,
    ContactSection
  }
}
</script>