<template>
  <div class="demo-icon">
    <Icon icon="heart" color="red" />
    <Icon icon="star" spin color="#f0c674" />
    <Icon icon="check" color="green" />
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
