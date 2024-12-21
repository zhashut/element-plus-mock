<template>
  <div>
    <Form>
      <FormItem label="the email">
        <Input v-model="email"/>
      </FormItem>
      <FormItem label="the password">
        <template #label="{ label }">
          <Button>{{ label }}</Button>
        </template>
        <Input v-model="password" type="password"/>
      </FormItem>
      <div>
        <Button type="primary">Submit</Button>
        <Button>Reset</Button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import Input from "../Input/Input.vue";
import Button from "../Button/Button.vue";
import {ref} from "vue";

const email = ref("");
const password = ref("");
</script>

<style lang="less" scoped></style>
