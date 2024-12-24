<template>
  <button
    ref="_ref"
    class="rl-button"
    :class="{
      [`rl-button--${type}`]: type,
      [`rl-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./types";
import Icon from "../Icon/Icon.vue";

// import { buttonProps } from './types'
defineOptions({
  name: "RlButton",
});

withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

const _ref = ref<HTMLButtonElement>();

defineExpose({
  ref: _ref,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
