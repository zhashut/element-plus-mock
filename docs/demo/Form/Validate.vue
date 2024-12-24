<template>
  <Form ref="formRef" :model="form" :rules="rules">
    <FormItem label="邮箱" prop="email">
      <Input v-model="form.email" />
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="form.password" type="password" />
    </FormItem>
    <FormItem label="验证密码" prop="confirmPwd">
      <Input v-model="form.confirmPwd" type="password" />
    </FormItem>
    <FormItem>
        <Button type="primary" @click.prevent="submit">提交</Button>
        <Button @click.prevent="reset">重置</Button>
        <Button @click.prevent="clear">清除提示</Button>
    </FormItem>
  </Form>
    <p>
        form value:
        <pre>{{ form }}</pre>
    </p>
</template>

<script setup>
import { reactive, ref } from "vue";
import Form from "@/components/Form/Form.vue";
import FormItem from "@/components/Form/FormItem.vue";
import Input from "@/components/Input/Input.vue";
import Button from "@/components/Button/Button.vue";

const formRef = ref();

const form = reactive({
  email: "lirenl",
  password: "",
  confirmPwd: "",
});

const rules = reactive({
  email: [{ type: "email", required: true, trigger: "blur" }, { type: "string", required: true, trigger: "change" }],
  password: [{ type: "string", required: true, trigger: "blur", min: 3, max: 5 }],
  confirmPwd: [{ type: "string", required: true, trigger: "blur", min: 3, max: 5 },
    {validator: (rule, value) => value === form.password, trigger: 'blur', message: '两个密码必须相同'}
  ]
});

const submit = async () => {
    try {
        await formRef.value.validate();
        console.log('passed!')
    } catch(e) {
        console.log('validate failed error', e)
    }
}

const clear = () => {
    formRef.value.clearValidate()
}

const reset = () => {
    formRef.value.resetFileds()
}
</script>

<style scoped>
.demo-form button + button {
  margin-left: 10px;
}
</style>
