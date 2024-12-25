---
title: Input | V-Element
description: Input 组件的文档
---

# Input 输入框
通过鼠标或键盘输入字符

## 基础文本框

<preview path="../demo/Input/Basic.vue" title="基础文本框" description="Input 基础文本框"></preview>

## 禁用文本框

通过 **disabled** 属性指定是否禁用 input 组件


<preview path="../demo/Input/Disable.vue" title="禁用文本框" description="Input 禁用文本框"></preview>

## 尺寸
使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： **large**, **small**。

<preview path="../demo/Input/Size.vue" title="不同尺寸文本框" description="不同尺寸文本框"></preview>


## 复合型输入框

可以在输入框前置或后置一个元素，通常是标签或按钮。可以使用 **prepend** 和 **append** 插槽。
要在输入框中添加前后元素，可以使用 **prefix** 和 **suffix** 插槽。

<preview path="../demo/Input/Combo.vue" title="复合型输入框" description="Input 复合型输入框"></preview>

## Textarea

用于输入多行文本信息可缩放的输入框。 添加 **type="textarea"** 属性来将 input 元素转换为原生的 textarea 元素。

<preview path="../demo/Input/Textarea.vue" title="Textarea" description="Textarea"></preview>

## 密码文本框

使用 **show-password** 属性即可得到一个可切换显示隐藏的密码框

<preview path="../demo/Input/Password.vue" title="密码文本框" description="Input 密码文本框"></preview>

## 清空文本框

使用 **clearable** 属性即可得到一个可一键清空的输入框


<preview path="../demo/Input/Clear.vue" title="清空文本框" description="Input 清空文本框"></preview>

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| v-model | 绑定值 | string | — | — |
| type | 类型 | string | text/textarea/password | text |
| size | 输入框大小 | string | large/small | — |
| placeholder | 输入框占位文本 | string | — | — |
| clearable | 是否可清空 | boolean | — | false |
| show-password | 是否显示切换密码图标 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| readonly | 是否只读 | boolean | — | false |
| autofocus | 是否自动获取焦点 | boolean | — | false |
| autocomplete | 原生 autocomplete 属性 | string | on/off | off |

### 插槽

| 插槽名 | 说明 |
|------|------|
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |

### 事件

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| input | 在 Input 值改变时触发 | (value: string) |
| change | 在 Input 值改变，且失去焦点时触发 | (value: string) |
| focus | 在 Input 获得焦点时触发 | (event: FocusEvent) |
| blur | 在 Input 失去焦点时触发 | (event: FocusEvent) |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | — |
