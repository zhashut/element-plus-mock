<template>
  <div class="demo-message">
    <Button @click="showMessage">显示可关闭消息</Button>
    <Button @click="closeAll">关闭所有消息</Button>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
import { createMessage, closeAll } from "@/components/Message/method";

const showMessage = () => {
  createMessage({
    message: "这是一条可关闭的消息提示",
    duration: 0,
    showClose: true,
  });
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 10px;
}
</style>
