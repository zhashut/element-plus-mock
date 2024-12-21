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
    <button @click.prevent="validate()">validate</button>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { formContextKey } from "./types";
import { isNil } from "lodash-es";
import type { FormItemProps } from "./types";
import Schema from "async-validator";

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

const validate = () => {
  const modelName = props.prop;
  if (modelName) {
    const validtor = new Schema({
      [modelName]: itemRules.value,
    });
    validtor
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        console.log("no error");
      })
      .catch((e) => {
        console.log(e.errors);
      });
  }
};
</script>

<style lang="less" scoped></style>
