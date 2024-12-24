# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

基础的下拉菜单用法。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="移动到下拉菜单上，展开更多操作。"></preview>

## 触发方式

<preview path="../demo/Dropdown/Trigger.vue" title="触发方式" description="可以配置 click 激活或者 hover 激活。"></preview>

## 禁用选项

<preview path="../demo/Dropdown/Disabled.vue" title="禁用选项" description="在 menuOptions 数组中设置 disabled: true 即可禁用该选项。"></preview>

## 分隔符

<preview path="../demo/Dropdown/Divided.vue" title="分隔符" description="在 menuOptions 数组中设置 divided: true 可以显示分隔符。"></preview>

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| menuOptions | 下拉菜单选项 | array | — | [] |
| placement | 菜单出现的位置 | string | top/top-start/top-end/bottom/bottom-start/bottom-end | bottom |
| trigger | 触发下拉的行为 | string | hover/click | hover |
| openDelay | 展开延时，单位为毫秒 | number | — | 0 |
| closeDelay | 收起延时，单位为毫秒 | number | — | 0 |

### MenuOption 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| label | 选项的标签 | string/VNode | — | — |
| key | 选项的唯一标识 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |
| divided | 是否显示分隔符 | boolean | — | false |

### 事件

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| select | 选中选项时触发 | 选中选项的 key 值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false | 