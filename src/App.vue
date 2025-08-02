<template>
  <div id="app">
    <Loader />
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import Loader from './components/ui/loader.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    Loader,
    AppNavbar,
    AppFooter
  }
}
</script>