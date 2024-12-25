---
title: Button | V-Element
description: Button 组件的文档
---

# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<preview path="../demo/Button/Basic.vue" title="基础用法" description="使用 type、plain、round 和 circle 来定义按钮的样式。"></preview>

## 禁用状态

按钮不可用状态。

<preview path="../demo/Button/Disabled.vue" title="禁用状态" description="使用 disabled 属性来控制按钮是否为禁用状态。"></preview>

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<preview path="../demo/Button/Icon.vue" title="图标按钮" description="使用 icon 属性为按钮添加图标。"></preview>

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<preview path="../demo/Button/Loading.vue" title="加载中" description="使用 loading 属性控制按钮是否显示加载中状态。"></preview>

## 不同尺寸

提供三种不同尺寸的按钮。

<preview path="../demo/Button/Size.vue" title="不同尺寸" description="使用 size 属性控制按钮的大小。"></preview>

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| type | 按钮类型 | string | primary/success/warning/danger/info | — |
| size | 按钮大小 | string | large/small | — |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
| icon | 图标类名 | string | — | — |
| loading | 是否加载中状态 | boolean | — | false |
| autofocus | 是否默认聚焦 | boolean | — | false |
| native-type | 原生 type 属性 | string | button/submit/reset | button |
