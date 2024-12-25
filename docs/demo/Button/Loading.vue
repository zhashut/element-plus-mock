<template>
  <div class="demo-button">
    <Button loading>加载中</Button>
    <Button type="primary" loading>加载中</Button>
    <Button type="success" loading>加载中</Button>
    <Button type="warning" loading>加载中</Button>
    <Button type="danger" loading>加载中</Button>
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
