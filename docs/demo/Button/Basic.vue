<template>
  <div class="demo-button">
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
  </div>
  <div class="demo-button">
    <Button plain>朴素按钮</Button>
    <Button type="primary" plain>主要按钮</Button>
    <Button type="success" plain>成功按钮</Button>
    <Button type="warning" plain>警告按钮</Button>
    <Button type="danger" plain>危险按钮</Button>
  </div>
  <div class="demo-button">
    <Button round>圆角按钮</Button>
    <Button type="primary" round>主要按钮</Button>
    <Button type="success" round>成功按钮</Button>
    <Button type="warning" round>警告按钮</Button>
    <Button type="danger" round>危险按钮</Button>
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
