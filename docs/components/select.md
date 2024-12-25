---
title: Select | V-Element
description: Select 组件的文档
---
# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

<preview path="../demo/Select/Basic.vue" title="基础用法" description="Select 基础用法"></preview>

<!-- ## 禁用状态

<preview path="../demo/Select/Disabled.vue" title="禁用状态" description="Select 禁用状态"></preview>

## 禁用选项

<preview path="../demo/Select/DisabledOption.vue" title="禁用选项" description="Select 禁用选项"></preview> -->

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| v-model | 绑定值 | string | — | — |
| options | 选项数组 | array | — | [] |
| placeholder | 占位文本 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |

### Options 配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| label | 选项的标签 | string | — | — |
| value | 选项的值 | string | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### 事件

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |


