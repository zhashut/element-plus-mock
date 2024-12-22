<template>
  <form class="rl-form">
    <slot />
    <button @click.prevent="validate">Validate All</button>
  </form>
</template>

<script setup lang="ts">
import { provide } from "vue";
import { formContextKey } from "@/components/Form/types";
import type {
  FormProps,
  FormContext,
  FormItemContext,
  FormValidateFailure,
  FormInstance,
} from "@/components/Form/types";
import type { ValidateFieldsError } from "async-validator";

const props = defineProps<FormProps>();

const fileds: FormItemContext[] = [];
const addFiled: FormContext["addFiled"] = (filed: FormItemContext) => {
  fileds.push(filed);
};
const removeFiled: FormContext["removeFiled"] = (filed: FormItemContext) => {
  if (filed.prop) {
    fileds.splice(fileds.indexOf(filed), 1);
  }
};

const validate = async () => {
  console.log("fileds", fileds);
  let validationErrors: ValidateFieldsError = {};
  for (const field of fileds) {
    try {
      await field.validate("");
    } catch (e) {
      const error = e as FormValidateFailure;
      console.log("error erros", error.errors, "fileds", error.fileds);
      validationErrors = {
        ...validationErrors,
        ...error.fileds,
      };
    }
  }
  console.log("validationErrors", validationErrors);
  if (Object.keys(validationErrors).length === 0) return true;
  return Promise.reject(validationErrors);
};

provide(formContextKey, {
  ...props,
  addFiled,
  removeFiled,
});

defineExpose<FormInstance>({
  validate,
});
</script>

<style lang="less" scoped></style>
