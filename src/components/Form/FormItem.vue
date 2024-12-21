<template>
  <div class="rl-form-item">
    <label class="rl-form-item__label">
      <slot name="label" :label="props.label">
        {{ props.label }}
      </slot>
    </label>
    <div class="rl-form-item__content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {FormItemProps} from './types';

const props = defineProps<FormItemProps>()

</script>

<style lang="less" scoped></style>