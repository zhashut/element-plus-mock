<template>
  <div
    class="rl-form-item"
    :class="{
      'is-error': validateStatus.state === ResponseStatus.ERROR,
      'is-success': validateStatus.state === ResponseStatus.SUCCESS,
      'is-loading': validateStatus.loading,
      'is-required': isRequired,
    }"
  >
    <label class="rl-form-item__label">
      <slot name="label" :label="props.label">
        {{ props.label }}
      </slot>
    </label>
    <div class="rl-form-item__content">
      <slot :validate="validate" />
      <div
        class="rl-form-item__error-msg"
        v-if="validateStatus.state === ResponseStatus.ERROR"
      >
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  inject,
  reactive,
  provide,
  onMounted,
  onUnmounted,
} from "vue";
import { formContextKey, formItemContextKey } from "./types";
import { isNil } from "lodash-es";
import type {
  FormItemProps,
  FormValidateFailure,
  FormItemContext,
  ValidateStatusProp,
  FormItemInstance,
} from "./types";
import { ResponseStatus } from "../constant/constant";
import Schema from "async-validator";

const props = defineProps<FormItemProps>();
const formContext = inject(formContextKey);
const validateStatus = reactive<ValidateStatusProp>({
  state: "init",
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
let initialValue: any = null;

const itemRules = computed(() => {
  const rules = formContext?.rules;
  if (rules && props.prop && !isNil(rules[props.prop])) {
    return rules[props.prop];
  } else {
    return [];
  }
});

const isRequired = computed(() => {
  return itemRules.value.some((rule) => rule.required);
});

const getTiggeredRules = (trigger?: string) => {
  const rules = itemRules.value;
  console.log("getTiggeredRules rules", rules);
  if (!rules) {
    return [];
  }
  return rules.filter((rule) => {
    if (!rule.trigger || !trigger) return true;
    return rule.trigger && rule.trigger === trigger;
  });
};

const validate = async (trigger?: string) => {
  const modelName = props.prop;
  const triggeredRules = getTiggeredRules(trigger);
  if (triggeredRules.length === 0) {
    return true;
  }
  if (modelName) {
    const validtor = new Schema({
      [modelName]: triggeredRules,
    });
    validateStatus.loading = true;
    return validtor
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = ResponseStatus.SUCCESS;
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e;
        validateStatus.state = ResponseStatus.ERROR;
        validateStatus.errorMsg =
          errors && errors.length > 0 ? errors[0].message || "" : "";
        console.log("validate errors", e.errors);
        return Promise.reject(e);
      })
      .finally(() => {
        validateStatus.loading = false;
      });
  }
};

const clearValidate = () => {
  validateStatus.state = "init";
  validateStatus.errorMsg = "";
  validateStatus.loading = false;
};

const resetFileds = () => {
  clearValidate();
  const model = formContext?.model;
  if (model && props.prop && !isNil(model[props.prop])) {
    model[props.prop] = initialValue;
  }
};

// 依赖注入
const context: FormItemContext = {
  prop: props.prop || "",
  validate,
  clearValidate,
  resetFileds,
};
provide(formItemContextKey, context);

onMounted(() => {
  if (props.prop) {
    formContext?.addFiled(context);
    initialValue = innerValue.value;
  }
});

onUnmounted(() => {
  formContext?.removeFiled(context);
});

// 将一些信息和方法暴露出去给用户使用
defineExpose<FormItemInstance>({
  validateStatus,
  validate,
  clearValidate,
  resetFileds,
});
</script>

<style lang="less" scoped></style>
