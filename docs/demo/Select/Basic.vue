<template>
  <Select v-model="test" placeholder="基础选择器，请选择" :options="options2" />
  <span style="margin-left: 10px">{{ test }}</span>
</template>

<script setup>
import { ref } from "vue";
import Select from "@/components/Select/Select.vue";

const test = ref("你好");
const options2 = [
  { label: "hello", value: "你好" },
  { label: "world", value: "世界" },
  { label: "thanks", value: "谢谢" },
  { label: "check", value: "禁用", disabled: true },
];
</script>

<style scoped></style>
