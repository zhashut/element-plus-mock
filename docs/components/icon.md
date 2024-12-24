# Icon 图标

提供了一套常用的图标集合，基于 Font Awesome 图标库。

## 基础用法

基础图标的用法。

<preview path="../demo/Icon/Basic.vue" title="基础用法" description="直接通过设置 icon 属性来使用图标。"></preview>

## 图标颜色

使用 color 属性来设置图标的颜色。

<preview path="../demo/Icon/Color.vue" title="图标颜色" description="可以使用 color 属性来设置图标的颜色，支持颜色关键字和十六进制颜色值。"></preview>

## 图标类型

使用 type 属性来设置图标的类型。

<preview path="../demo/Icon/Type.vue" title="图标类型" description="支持 primary、success、warning、danger 四种类型。"></preview>

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| icon | 图标名称，参考 Font Awesome 图标集 | string | — | — |
| type | 图标类型 | string | primary/success/warning/danger | — |
| color | 图标颜色 | string | — | — |