# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。使用表单，您可以收集、验证和提交数据。

## 基础用法

基础的表单使用。

<preview path="../demo/Form/Basic.vue" title="基础用法" description="在 Form 组件中，每个表单域由一个 FormItem 组件构成，表单域中可以放置各种类型的表单控件。"></preview>

## 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

<preview path="../demo/Form/Validate.vue" title="表单验证" description="Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 FormItem 的 prop 属性设置为需校验的字段名即可。"></preview>

## API

### Form 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| model | 表单数据对象 | object | — | — |
| rules | 表单验证规则 | object | — | — |
| label-width | 表单域标签的宽度 | string/number | — | — |

### Form 方法

| 方法名 | 说明 | 参数 |
|------|------|------|
| validate | 对整个表单进行校验的方法。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) |
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | — |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性组成的数组，如不传则移除整个表单的校验结果 | Function(props: array) |

### FormItem 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | — | — |
| label | 标签文本 | string | — | — |
| rules | 表单验证规则 | object/array | — | — |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 | string | — | — |
| show-message | 是否显示校验错误信息 | boolean | — | true | 