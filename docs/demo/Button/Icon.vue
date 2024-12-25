<template>
  <div class="demo-button">
    <Button icon="search">搜索</Button>
    <Button icon="edit" type="primary">编辑</Button>
    <Button icon="check" type="success">确认</Button>
    <Button icon="message" type="info">消息</Button>
    <Button icon="delete" type="danger">删除</Button>
    <Button icon="star" type="warning">收藏</Button>
  </div>
  <div class="demo-button">
    <Button icon="search" circle></Button>
    <Button icon="edit" type="primary" circle></Button>
    <Button icon="check" type="success" circle></Button>
    <Button icon="message" type="info" circle></Button>
    <Button icon="delete" type="danger" circle></Button>
    <Button icon="star" type="warning" circle></Button>
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
