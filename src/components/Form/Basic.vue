<template>
  <div>
    <Form :model="model" :rules="rules" ref="formRef">
      <FormItem label="the email" prop="email">
        <Input v-model="model.email" />
      </FormItem>
      <FormItem label="the password" prop="password">
        <Input v-model="model.password" type="password" />
      </FormItem>
      <FormItem label="confirm password" prop="confirmPwd">
        <Input v-model="model.confirmPwd" type="password" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click.prevent="submit">Submit</Button>
        <Button @click.prevent="clear">Clear</Button>
        <Button @click.prevent="reset">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script setup lang="ts">
import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import Input from "../Input/Input.vue";
import Button from "../Button/Button.vue";
import { reactive, ref } from "vue";
import type { FormRules } from "./types";

const model = reactive({
  email: "zhashut",
  password: "",
  confirmPwd: "",
});

const rules = reactive<FormRules>({
  email: [
    { type: "email", required: true, trigger: "blur" },
    { type: "string", required: true, trigger: "change" },
  ],
  password: [
    { type: "string", required: true, trigger: "blur", min: 3, max: 5 },
  ],
  confirmPwd: [
    { type: "string", required: true, trigger: "blur", min: 3, max: 5 },
    {
      validator: (rule, value) => value === model.password,
      trigger: "blur",
      message: "两个密码必须相同",
    },
  ],
});

const formRef = ref();
const submit = async () => {
  try {
    await formRef.value.validate();
    console.log("passed!");
  } catch (e) {
    console.log("validate failed error", e);
  }
};
const clear = () => {
  formRef.value.clearValidate();
};
const reset = () => {
  formRef.value.resetFileds();
};
</script>

<style lang="less" scoped></style>
