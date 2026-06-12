<template>
  <div id="app">
    <Loader v-if="showLoader" @done="showLoader = false" />
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Loader from '@/components/common/loader.vue'
import AppNavbar from '@/layouts/AppNavbar.vue'
import AppFooter from '@/layouts/AppFooter.vue'

const showLoader = ref(true)
</script>