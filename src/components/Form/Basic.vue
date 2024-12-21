<template>
  <div>
    <Form :model="model" :rules="rules">
      <FormItem label="the email">
        <Input v-model="model.email" />
      </FormItem>
      <FormItem label="the password">
        <template #label="{ label }">
          <Button>{{ label }}</Button>
        </template>
        <Input v-model="model.password" type="password" />
      </FormItem>
      <div>
        <Button type="primary">Submit</Button>
        <Button>Reset</Button>
      </div>
    </Form>
    <p>
        form value:
        <pre>{{ model }}</pre>
    </p>
  </div>
</template>

<script setup lang="ts">
import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import Input from "../Input/Input.vue";
import Button from "../Button/Button.vue";
import { reactive } from "vue";

const model = reactive({
  email: "",
  password: "",
});

const rules = reactive({
  email: [{ type: "string", required: true, trigger: "blur" }],
  password: [{ type: "string", required: true, trigger: "blur" }],
});
</script>

<style lang="less" scoped></style>
