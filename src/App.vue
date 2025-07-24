<template>
  <div id="app">
    <AppNavbar />
    <main>
      <AppHero />
      <AppServices />
      <AppCourses />
      <AppStats />
      <AppFAQ />
      <AppInstructors />
      <AppContact />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppHero from './components/AppHero.vue'
import AppServices from './components/AppServices.vue'
import AppCourses from './components/AppCourses.vue'
import AppStats from './components/AppStats.vue'
import AppFAQ from './components/AppFAQ.vue'
import AppInstructors from './components/AppInstructors.vue'
import AppContact from './components/AppContact.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppHero,
    AppServices,
    AppCourses,
    AppStats,
    AppFAQ,
    AppInstructors,
    AppContact,
    AppFooter
  }
}
</script>