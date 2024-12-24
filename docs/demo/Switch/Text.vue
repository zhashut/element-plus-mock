<template>
  <Switch v-model="test" activeText="ON" inactiveText="OFF" />
</template>

<script setup>
import { ref } from "vue";
import Switch from "@/components/Switch/Switch.vue";

const test = ref(false);
</script>
