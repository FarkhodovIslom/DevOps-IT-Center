<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.modal {
  background: white;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>
