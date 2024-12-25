<template>
  <div class="demo-message">
    <Button @click="showSuccess">成功</Button>
    <Button @click="showWarning">警告</Button>
    <Button @click="showInfo">消息</Button>
    <Button @click="showError">错误</Button>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
import { createMessage } from "@/components/Message/method";

const showSuccess = () => {
  createMessage({
    message: "这是一条成功消息",
    type: "success",
    duration: 3000,
  });
};
const showWarning = () => {
  createMessage({
    message: "这是一条警告消息",
    type: "warning",
    duration: 3000,
  });
};
const showInfo = () => {
  createMessage({
    message: "这是一条消息提示",
    type: "info",
    duration: 3000,
  });
};
const showError = () => {
  createMessage({
    message: "这是一条错误消息",
    type: "danger",
    duration: 3000,
  });
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 10px;
}
</style>
