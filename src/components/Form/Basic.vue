<template>
  <div>
    <Form :model="model" :rules="rules" ref="formRef">
      <FormItem label="the email" prop="email">
        <Input v-model="model.email" />
      </FormItem>
      <FormItem label="the password" prop="password">
        <template #label="{ label }">
          <Button>{{ label }}</Button>
        </template>
        <Input v-model="model.password" type="password" />
      </FormItem>
      <div>
        <Button type="primary" @click.prevent="submit">Submit</Button>
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
import { reactive, ref } from "vue";
import type { FormRules } from "./types";

const model = reactive({
  email: "",
  password: "",
});

const rules = reactive<FormRules>({
  email: [{ type: "email", required: true, trigger: "blur" }, { type: "string", required: true, trigger: "change" }],
  password: [{ type: "string", required: true, trigger: "blur", min: 3, max: 5 }],
});

const formRef = ref();
const submit = async () => {
    try {
        await formRef.value.validate();
        console.log('passed!')
    } catch(e) {
        console.log('validate failed error', e)
    }
}
</script>

<style lang="less" scoped></style>
