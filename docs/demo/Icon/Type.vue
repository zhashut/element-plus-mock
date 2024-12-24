<template>
  <div class="demo-icon">
    <Icon icon="info-circle" type="primary" />
    <Icon icon="check-circle" type="success" />
    <Icon icon="exclamation-circle" type="warning" />
    <Icon icon="times-circle" type="danger" />
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
