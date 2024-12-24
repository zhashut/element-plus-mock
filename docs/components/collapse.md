# Collapse 折叠面板

通过折叠面板收纳内容区域。

## 基础用法

可同时展开多个面板，面板之间不影响。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="每个 CollapseItem 代表一个可折叠的内容区域。"></preview>

## 手风琴效果

每次只能展开一个面板。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴" description="通过 accordion 属性来设置是否以手风琴模式显示。"></preview>

## 禁用状态

通过 disabled 属性来禁用某一项。

<preview path="../demo/Collapse/Disabled.vue" title="禁用状态" description="通过 disabled 属性来禁用某一项。"></preview>

## API

### Collapse 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| v-model | 当前激活的面板 | string/array | — | — |
| accordion | 是否手风琴模式 | boolean | — | false |

### Collapse 事件

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 当前激活面板改变时触发 | (activeNames: array/string) |

### CollapseItem 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| name | 唯一标志符，必填 | string/number | — | — |
| title | 面板标题 | string | — | — |
| disabled | 是否禁用 | boolean | — | false | 