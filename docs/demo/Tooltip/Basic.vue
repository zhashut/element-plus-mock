<template>
  <Tooltip content="这是一段提示文字">
    <Button>鼠标移入查看提示</Button>
  </Tooltip>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/Button/Button.vue";
import Tooltip from "@/components/Tooltip/Tooltip.vue";
</script> 