<template>
  <div
    class="rl-form-item"
    :class="{
      'is-error': validateStatus.state === ResponseStatus.ERROR,
      'is-success': validateStatus.state === ResponseStatus.SUCCESS,
      'is-loading': validateStatus.loading,
    }"
  >
    <label class="rl-form-item__label">
      <slot name="label" :label="props.label">
        {{ props.label }}
      </slot>
    </label>
    <div class="rl-form-item__content">
      <slot />
      <div
        class="rl-form-item__error-msg"
        v-if="validateStatus.state === ResponseStatus.ERROR"
      >
        {{ validateStatus.errorMsg }}
      </div>
    </div>
    {{ innerValue }} - {{ itemRules }}
    <button @click.prevent="validate()">validate</button>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, reactive } from "vue";
import { formContextKey } from "./types";
import { isNil } from "lodash-es";
import type { FormItemProps, FormValidateFailure } from "./types";
import { ResponseStatus } from "../constant/constant";
import Schema from "async-validator";

const props = defineProps<FormItemProps>();
const formContext = inject(formContextKey);
const validateStatus = reactive({
  state: "",
  errorMsg: "",
  loading: false,
});

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
    validateStatus.loading = true;
    validtor
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = ResponseStatus.SUCCESS;
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e;
        validateStatus.state = ResponseStatus.ERROR;
        validateStatus.errorMsg =
          errors && errors.length > 0 ? errors[0].message || "" : "";
      })
      .finally(() => {
        validateStatus.loading = false;
      });
  }
};
</script>

<style lang="less" scoped></style>
