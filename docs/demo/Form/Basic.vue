<template>
  <Form :model="form" :rules="rules">
    <FormItem label="用户名" prop="username">
      <Input v-model="form.username" />
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input type="password" v-model="form.password" />
    </FormItem>
    <FormItem>
      <Button type="primary" @click="onSubmit">提交</Button>
    </FormItem>
  </Form>
</template>

<script setup>
import { reactive } from "vue";
import Form from "@/components/Form/Form.vue";
import FormItem from "@/components/Form/FormItem.vue";
import Input from "@/components/Input/Input.vue";
import Button from "@/components/Button/Button.vue";

const form = reactive({
  username: "",
  password: "",
});

const rules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" },
  ],
};

const onSubmit = () => {
  console.log("submit!", form);
};
</script>
