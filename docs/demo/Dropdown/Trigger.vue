<template>
  <div class="demo-dropdown">
    <Dropdown :menu-options="options" trigger="click">
      <Button> 点击触发 </Button>
    </Dropdown>
    <Dropdown :menu-options="options" trigger="hover">
      <Button> 悬停触发 </Button>
    </Dropdown>
  </div>
</template>

<script setup>
import Button from "@/components/Button/Button.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";

const options = [
  {
    label: "黄金糕",
    key: "1",
  },
  {
    label: "狮子头",
    key: "2",
  },
  {
    label: "螺蛳粉",
    key: "3",
  },
  {
    label: "双皮奶",
    key: "4",
  },
];
</script>

<style scoped>
.demo-dropdown {
  display: flex;
  gap: 20px;
}
</style>
