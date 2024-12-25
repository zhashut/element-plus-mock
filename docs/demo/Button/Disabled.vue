<template>
  <div class="demo-button">
    <Button disabled>默认按钮</Button>
    <Button type="primary" disabled>主要按钮</Button>
    <Button type="success" disabled>成功按钮</Button>
    <Button type="warning" disabled>警告按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
</script>

<style scoped>
.demo-button {
  margin-bottom: 20px;
}
.demo-button .rl-button {
  margin-right: 10px;
}
</style>
