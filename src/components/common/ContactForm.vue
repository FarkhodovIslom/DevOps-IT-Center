<template>
  <form class="contact-form">
    <slot></slot>
  </form>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
