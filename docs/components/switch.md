---
title: Switch | V-Element
description: Switch 组件的文档
---

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

<preview path="../demo/Switch/Basic.vue" title="基础用法" description="Switch 基础用法"></preview>

## 禁用状态

<preview path="../demo/Switch/Disabled.vue" title="禁用状态" description="Switch 禁用状态"></preview>

## 文字描述

<preview path="../demo/Switch/Text.vue" title="文字描述" description="使用 active-text 和 inactive-text 属性来设置开关的文字描述"></preview>

## 不同尺寸

<preview path="../demo/Switch/Size.vue" title="不同尺寸" description="使用 size 属性改变开关大小"></preview>

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| v-model | 绑定值 | boolean / string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
| active-text | switch 打开时的文字描述 | string | — | — |
| inactive-text | switch 关闭时的文字描述 | string | — | — |
| active-value | switch 打开时的值 | boolean / string / number | — | true |
| inactive-value | switch 关闭时的值 | boolean / string / number | — | false |
| name | switch 对应的 name 属性 | string | — | — |
| size | 开关大小 | string | large/small | — |

### 事件

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | switch 状态发生变化时的回调函数 | 新状态的值 |