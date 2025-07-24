<template>
  <div class="stats-card">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.stats-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
</style>
