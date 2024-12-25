<template>
  <main class="main-app">
    <h2>Button 按钮</h2>
    <div class="button-containe common-container">
      <Button ref="buttonRef" @click="open">Test Button</Button>
      <Button plain @click="close">Plain Button</Button>
      <Button round>Round Button</Button>
      <Button circle>RL</Button>
      <Button disabled>Disabled Button</Button>
      <br /><br />
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
      <br /><br />
      <Button type="primary" plain>Primary</Button>
      <Button type="success" plain>Success</Button>
      <Button type="info" plain>Info</Button>
      <Button type="warning" plain>Warning</Button>
      <Button type="danger" plain>Danger</Button>
      <br /><br />
      <Button size="large">Large</Button>
      <Button size="small">Small</Button>
      <br /><br />
      <Button size="large" loading>Loading</Button>
      <Button size="large" icon="bars-progress">Icon</Button>
      <br /><br />
    </div>

    <h2>Collapse 折叠面板</h2>
    <div class="collapse-container">
      <Collapse v-model="openedValue">
        <Item name="a" title="Title A">
          <div>this is content aaaa</div>
        </Item>
        <Item name="b" title="Title B">
          <div>this is bbbbb test</div>
        </Item>
        <Item name="c" title="Disabled Title" disabled>
          <div>this is cccc test</div>
        </Item>
      </Collapse>
    </div>

    <h2>Icon 图标</h2>
    <div class="icon-container common-container">
      <Icon icon="user-secret" type="primary"></Icon>
      <Icon icon="arrow-up" spin type="success"></Icon>
    </div>

    <h2>Tooltip 文字提示</h2>
    <div class="tooltip-container common-container">
      <Tooltip
        content="triggered by rl"
        placement="right-end"
        :trigger="trigger"
        ref="tooltipRef"
        :open-delay="1000"
        :close-delay="1000"
        :popperOptions="popperOptions"
      >
        <img
          alt="Vue log"
          class="logo"
          src="./assets//logo.svg"
          width="30"
          height="30"
        />
        <template #content>
          <h4>triggered by rl with slot</h4>
        </template>
      </Tooltip>
    </div>

    <h2>Dropdown 下拉菜单</h2>
    <div class="tooltip-container common-container">
      <Dropdown
        placement="bottom"
        :trigger="dropdownTrigger"
        :menu-options="menuOptions"
      >
        <img
          alt="snow log"
          class="logo"
          src="./assets//snow-icon.svg"
          width="30"
          height="30"
        />
      </Dropdown>
    </div>

    <h2>Input 输入框</h2>
    <div class="icon-container">
      <Input type="password" placeholder="请输入密码" />
    </div>

    <h2>Switch 开关</h2>
    <div class="icon-container">
      <Switch />
    </div>

    <h2>Select 选择器</h2>
    <div class="icon-container">
      <Select
        v-model="selectVal"
        placeholder="请选择"
        :options="selectOptions"
      />
    </div>

    <h2>Form 表单</h2>
    <div class="icon-container">
      <Basic />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from "vue";
import Dropdown from "./components/Dropdown/Dropdown.vue";
import type { MenuOption } from "./components/Dropdown/types";
import Button from "./components/Button/Button.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import Item from "./components/Collapse/CollapseItem.vue";
import Tooltip from "./components/Tooltip/Tooltip.vue";
import Icon from "./components/Icon/Icon.vue";
import Input from "./components/Input/Input.vue";
import Switch from "./components/Switch/Switch.vue";
import Select from "./components/Select/Select.vue";
import Basic from "./components/Form/Basic.vue";
import { createMessage, closeAll } from "./components/Message/method";
import type { ButtonInstance } from "./components/Button/types";
import type { TooltipInstance } from "./components/Tooltip/types";
import type { Options } from "@popperjs/core";

const buttonRef = ref<ButtonInstance | null>(null);
const openedValue = ref(["a"]);

// Tooltip 组件相关 start
const trigger = ref<"hover" | "click">("hover");
const tooltipRef = ref<TooltipInstance>();
const open = () => {
  createMessage({ message: "hello world", duration: 0, showClose: true });
  tooltipRef.value?.show();
};
const close = () => {
  tooltipRef.value?.hide();
};
const popperOptions: Partial<Options> = {
  strategy: "fixed",
};
// Tooltip 组件相关 end

// dropdown 组件相关 start
const dropdownTrigger = ref<"hover" | "click">("click");
const menuOptions: MenuOption[] = [
  {
    key: 1,
    label: h("b", "this is bold"),
  },
  {
    key: 2,
    label: "item2",
  },
  {
    key: 3,
    label: "item3",
  },
  {
    key: 4,
    label: "item4",
    disabled: true,
  },
  {
    key: 5,
    label: "item5",
    divided: true,
  },
];
// dropdown 组件相关 end

onMounted(() => {
  createMessage({ message: "hello world", duration: 0, showClose: true });
  createMessage({
    message: "hello world again",
    duration: 0,
    type: "success",
    showClose: true,
  });
  createMessage({
    message: "谢谢你的观看",
    duration: 0,
    type: "danger",
    showClose: true,
  });
});

onMounted(() => {
  closeAll();
});

const selectVal = ref("");
const selectOptions = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
];
</script>

<style scoped>
body,
html {
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.common-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  /* Adjust spacing between divs */
}

.button-container {
}

.collapse-container {
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  /* Adjust spacing between divs */
}

.icon-container {
  display: flex;
  /* 确保使用 flexbox */
  justify-content: center;
  gap: 10px;
}

.tooltip-container {
  display: flex;
  /* 确保使用 flexbox */
  justify-content: center;
  gap: 10px;
}
</style>
