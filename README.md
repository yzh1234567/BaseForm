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
|search|搜索按钮|`Object`|`false`|{"type":"primary","plain":false,"round":false,"circle":false,"disabled":false,"icon":"","text":"搜索"}|
|reset|重置按钮|`Object`|`false`|{"type":"","plain":false,"round":false,"circle":false,"disabled":false,"icon":"","text":"重置"}|
|inline|-|`Boolean`|`false`|false|

<!-- @vuese:BaseForm:props:end -->


## Events

<!-- @vuese:BaseForm:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|submit|-|-|
|reset|-|-|

<!-- @vuese:BaseForm:events:end -->


## Slots

<!-- @vuese:BaseForm:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
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





## 例子 

# import BaseForm from "baseformjsx"
# Vue.use(BaseForm)

```vue

<template>

  <div
  >
   <base-form :fields="fields" :labelWidth="labelWidth" :form="form"></base-form>
  </div>

</template>

<script>

export default {
       data(){
           return {
               form:{
                 name:'',
                 sex:''
               },
               fields:[
                 {  
                    options:[], //为下拉选择框准备
                    type:'text',
                    name:'name',
                    value:'',  //默认值
                    label:'姓名',
                    block:true,//用于判断元素是用块级元素渲染还是行级元素渲染
                    clearable:true,
                    placeholder:'请输入姓名',
                    maxlength:10,
                    'show-word-limit':true,
                    rules:[
                        {required:true,message:'请输入姓名',trigger:['change','blur']}
                    ], //规则验证
                    class:{
                        'my-input':true
                    },
                    style:{
                        width:'300px'
                    },
                    ...  //兼容element form表单元素的任意属性
                 },
                 {
                     options:[], //为下拉选择框准备
                    type:'select',
                    name:'sex',
                    value:'',  //默认值
                    label:'性别',
                    block:true,//用于判断元素是用块级元素渲染还是行级元素渲染
                    clearable:true,
                    placeholder:'请输入姓名',
                    maxlength:10,
                    'show-word-limit':true,
                    rules:[
                        {required:true,message:'请输入姓名',trigger:['change','blur']}
                    ], //规则验证
                    class:{
                        'my-input':true
                    },
                    style:{
                        width:'300px'
                    },
                    ...  //兼容element form表单元素的任意属性
                 },
                 }
               ]
           }
           //type 对应标签关系
           // ["text", "textarea"]  el-input
           // select     el-select
           //["year","month","date","week","datetime","datetimerange","daterange",] el-date-picker
           // checkbox el-checkbox-group
           //radio     el-radio-group
           //number    el-input-number
           //switch    el-switch
           //slider    el-slider
           //transfer  el-transfer
           //timePicker el-time-picker
           //timeSelect el-time-select
           //cascader el-cascader
           //rate   el-rate
       },

</script>
```
