<template>
  <Button @click="showMessage">显示消息</Button>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
import { createMessage } from "@/components/Message/method";

const showMessage = () => {
  createMessage({
    message: "这是一条消息提示",
    duration: 3000,
    type: "info",
  });
};
</script>
