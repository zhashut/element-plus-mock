<template>
  <div class="demo-tooltip">
    <Tooltip content="点击触发提示" trigger="click">
      <Button>点击触发</Button>
    </Tooltip>
    <Tooltip content="悬停触发提示" trigger="hover">
      <Button>悬停触发</Button>
    </Tooltip>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/Button/Button.vue";
import Tooltip from "@/components/Tooltip/Tooltip.vue";
</script>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 20px;
}
</style> 