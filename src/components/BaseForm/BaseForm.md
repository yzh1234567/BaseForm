# BaseForm

## Props

<!-- @vuese:BaseForm:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|fields|表单组件的数组对象|`Array`|`false`|[]|
|size|-|`String`|`false`|small|
|diasbled|-|`Boolean`|`false`|false|
|labelWidth|-|`String`|`false`|0px|
|form|表单元素值|`Object`|`false`|{}|
|operation|自定义按钮组属性及事件|`Object`|`false`|{"btns":[{"type":"primary","plain":false,"round":false,"circle":false,"disabled":false,"icon":"","text":"搜索","on":{}},{"type":"","plain":false,"round":false,"circle":false,"disabled":false,"icon":"","text":"重置","on":{}}]}|
|inline|-|`Boolean`|`false`|false|

<!-- @vuese:BaseForm:props:end -->


## Events

<!-- @vuese:BaseForm:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|submit|-|-|
|resetBtn|-|-|

<!-- @vuese:BaseForm:events:end -->


## Slots

<!-- @vuese:BaseForm:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|self|有自定义组件需求时;自定义组件插槽内容|-|
|other|其他插槽|-|
|default|默认插槽|操作的按钮|
|operate|操作操作|其他的操作按钮|

<!-- @vuese:BaseForm:slots:end -->


## Methods

<!-- @vuese:BaseForm:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|validate|返回表单的是否通过规则验证|-|
|resetValid|重置表单的验证规则|-|
|handleSearch|搜索 搜索按钮的点击事件||
|handleReset|重置按钮的点击事件 |-|

<!-- @vuese:BaseForm:methods:end -->


