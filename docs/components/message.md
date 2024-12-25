# Message 消息提示

消息提示组件用于在页面中展示重要的提示信息。

## 基础用法

基础的消息提示用法。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="从顶部出现，3秒后自动消失。"></preview>

## 不同类型

用来显示「成功、警告、消息、错误」类的操作反馈。

<preview path="../demo/Message/Types.vue" title="不同类型" description="可以用来显示不同类型的消息提示。"></preview>

## 可关闭的消息提示

可以添加关闭按钮。

<preview path="../demo/Message/Closable.vue" title="可关闭" description="可以添加关闭按钮，并且可以手动关闭所有消息。"></preview>

## API

### Message 方法

| 方法名 | 说明 | 参数 |
|------|------|------|
| createMessage | 创建一个消息提示 | options |
| closeAll | 关闭所有消息 | — |

### Options 配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| message | 消息文字 | string / VNode | — | — |
| type | 消息类型 | string | success/warning/info/danger | info |
| duration | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| offset | Message 距离窗口顶部的偏移量 | number | — | 20 | 