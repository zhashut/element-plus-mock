<template>
  <div class="rl-form-item">
    <label class="rl-form-item__label">
      <slot name="label" :label="props.label">
        {{ props.label }}
      </slot>
    </label>
    <div class="rl-form-item__content">
      <slot />
    </div>
    {{ innerValue }} - {{ itemRules }}
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { formContextKey } from "./types";
import { isNil } from "lodash-es";
import type { FormItemProps } from "./types";

const props = defineProps<FormItemProps>();
const formContext = inject(formContextKey);

const innerValue = computed(() => {
  const model = formContext?.model;
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop];
  } else {
    return null;
  }
});

const itemRules = computed(() => {
  const rules = formContext?.rules;
  if (rules && props.prop && !isNil(rules[props.prop])) {
    return rules[props.prop];
  } else {
    return [];
  }
});
</script>

<style lang="less" scoped></style>
