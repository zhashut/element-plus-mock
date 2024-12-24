<template>
  <div class="demo-tooltip">
    <div class="row">
      <Tooltip content="上左提示文字" placement="top-start">
        <Button>上左</Button>
      </Tooltip>
      <Tooltip content="上边提示文字" placement="top">
        <Button>上边</Button>
      </Tooltip>
      <Tooltip content="上右提示文字" placement="top-end">
        <Button>上右</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip content="左上提示文字" placement="left-start">
        <Button>左上</Button>
      </Tooltip>
      <Tooltip content="右上提示文字" placement="right-start">
        <Button>右上</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip content="左边提示文字" placement="left">
        <Button>左边</Button>
      </Tooltip>
      <Tooltip content="右边提示文字" placement="right">
        <Button>右边</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip content="左下提示文字" placement="left-end">
        <Button>左下</Button>
      </Tooltip>
      <Tooltip content="��下提示文字" placement="right-end">
        <Button>右下</Button>
      </Tooltip>
    </div>
    <div class="row">
      <Tooltip content="下左提示文字" placement="bottom-start">
        <Button>下左</Button>
      </Tooltip>
      <Tooltip content="下边提示文字" placement="bottom">
        <Button>下边</Button>
      </Tooltip>
      <Tooltip content="下右提示文字" placement="bottom-end">
        <Button>下右</Button>
      </Tooltip>
    </div>
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
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.row {
  display: flex;
  gap: 20px;
}
</style> 