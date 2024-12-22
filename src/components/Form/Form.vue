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
} from "@/components/Form/types";

const props = defineProps<FormProps>();

const fileds: FormItemContext[] = [];
const addFileds: FormContext["addFileds"] = (filed: FormItemContext) => {
  fileds.push(filed);
};
const removeFileds: FormContext["removeFileds"] = (filed: FormItemContext) => {
  if (filed.prop) {
    fileds.splice(fileds.indexOf(filed), 1);
  }
};

const validate = () => {
  console.log("fileds", fileds);
};

provide(formContextKey, {
  ...props,
  addFileds,
  removeFileds,
});
</script>

<style lang="less" scoped></style>
