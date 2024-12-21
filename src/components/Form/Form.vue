<template>
  <form class="rl-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide } from "vue";
import { formContextKey } from "@/components/Form/types";
import type { FormProps } from "@/components/Form/types";

const props = defineProps<FormProps>();

provide(formContextKey, props);
</script>

<style lang="less" scoped></style>
