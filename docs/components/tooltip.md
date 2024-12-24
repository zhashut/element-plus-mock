# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

基础的文字提示用法。

<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="使用content属性来决定hover时的提示信息。"></preview>

## 不同位置

位置有 12 个方向。

<preview path="../demo/Tooltip/Placement.vue" title="不同位置" description="使用placement属性来决定Tooltip的出现位置。"></preview>

## 触发方式

<preview path="../demo/Tooltip/Trigger.vue" title="触发方式" description="通过trigger属性设置触发方式。"></preview>

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| content | 显示的内容 | string | — | — |
| placement | Tooltip 的出现位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom |
| trigger | 触发方式 | string | hover/click | hover |
| transition | 过渡动画名称 | string | — | fade |
| openDelay | 延迟出现，单位毫秒 | number | — | 0 |
| closeDelay | 延迟关闭，单位毫秒 | number | — | 0 |

### 插槽

| 插槽名 | 说明 |
|------|------|
| default | 触发 Tooltip 显示的元素 |
| content | 自定义内容 | 