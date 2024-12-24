<template>
  <Dropdown :menu-options="options">
    <Button> 下拉菜单 </Button>
  </Dropdown>
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
    disabled: true,
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
