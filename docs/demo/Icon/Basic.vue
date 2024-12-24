<template>
  <div class="demo-icon">
    <Icon icon="user" />
    <Icon icon="home" />
    <Icon icon="search" />
    <Icon icon="edit" />
    <Icon icon="delete" />
  </div>
</template>

<script setup>
import Icon from "@/components/Icon/Icon.vue";
</script>

<style scoped>
.demo-icon {
  display: flex;
  gap: 20px;
  font-size: 24px;
}
</style>
