<template>
  <form class="rl-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { FormProps } from "@/components/Form/types";

defineProps<FormProps>();
</script>

<style lang="less" scoped></style>
