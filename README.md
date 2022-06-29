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

| Event Name | Description | Parameters |
| ---------- | ----------- | ---------- |
| submit     | -           | -          |
| reset      | -           | -          |

<!-- @vuese:BaseForm:events:end -->

## Slots

<!-- @vuese:BaseForm:slots:start -->

| Name    | Description                           | Default Slot Content |
| ------- | ------------------------------------- | -------------------- |
| self    | 有自定义组件需求时;自定义组件插槽内容 | -                    |
| other   | 其他插槽                              | -                    |
| default | 默认插槽                              | 操作的按钮           |
| operate | 操作操作                              | 其他的操作按钮       |

<!-- @vuese:BaseForm:slots:end -->

## Methods

<!-- @vuese:BaseForm:methods:start -->

| Method       | Description                | Parameters |
| ------------ | -------------------------- | ---------- |
| validate     | 返回表单的是否通过规则验证 | -          |
| resetValid   | 重置表单的验证规则         | -          |
| handleSearch | 搜索 搜索按钮的点击事件    |            |
| handleReset  | 重置按钮的点击事件         | -          |

<!-- @vuese:BaseForm:methods:end -->

## 例子

# import BaseForm from "baseformjsx"

# Vue.use(BaseForm)

# 优化了这个组件；把这个核心组件提出来并与组件库解绑；组合成一个新组件 ;并发布https://www.npmjs.com/package/common_form_item

```vue
<template>
  <div>
    <base-form
      :fields="fields"
      :labelWidth="labelWidth"
      :form="form"
      :operation="operation"
    ></base-form>
  </div>
</template>

<script>

export default {
       data(){
           return {
               operation:{
                   class:{
                     'for':true
                   },
                   style:{
                       fontSize:'18px'
                   },
                   btns:[
                         {
                            type: "primary",
                            plain: false,
                            round: false,
                            circle: false,
                            disabled: false,
                            icon: "",
                            text: "搜索",
                            tag :'el-button',
                        },
                        {
                            type: "",
                            plain: false,
                            round: false,
                            circle: false,
                            disabled: false,
                            icon: "",
                            text: "重置",
                            tag :'el-button',
                        }
                    ]
               },
               form:{
                 name:'',
                 sex:'',
                 channel:'',
                 sex:'',
               },
               fields:[
                 {
                    tag:'el-input',  //标签名称
                    options:[], //为下拉选择框\多选框\单选框准备
                    type:'text', //指明文本框是输入框、文本域、单选、多选、下拉选择框,可选择值text|textarea|select|checkbox|radio 和其他 原生 input 的 type 值
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
                    scopedSlots:{
                        heander:(props)=>{
                            return (
                                <span>天</span>
                            )
                        }
                    }, //作用域插槽写法 举例是该组件有一个header的作用域插槽
                    slots:{
                        suffix:()=>{
                            return (
                                <span>天</span>
                            )
                        }
                    }, //插槽写法
                    ...  //兼容element form表单元素的任意属性
                 },
                 {
                    options:[], //为下拉选择框准备
                    tag:'el-select',
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
                    on:{
                        click:this.click,//点击事件
                        change:this.change,//改变事件
                    }
                    ...  //兼容element form表单元素的任意属性
                 },
                 {
                    label:'渠道',
                    tag:'el-checkbox-group',
                    name:'channel',
                    value:'',
                    button:true, //用于判断单选、多选框是否为按钮组
                    placeholder:'请选择渠道',
                    options:[
                        {
                            label:'天猫',
                            value:1
                        },
                        {
                            label:'京东',
                            value:2
                        }
                    ],
                    block:true
                 },
                  {
                    label:'性别',
                    tag:'el-radio',// 由于elementui 的单选按钮组采用component内置标签写法;jxs在vue2.0无法识别；所以只能写成el-radio；后续升级为vue3.0可以解决这个问题;可惜element的3.0版本没有用这个了
                    name:'sex',
                    value:'',
                    button:true, //用于判断单选、多选框是否为按钮组
                    placeholder:'请选择性别',
                    options:[
                        {
                            label:'男',
                            value:1
                        },
                        {
                            label:'女',
                            value:2
                        }
                    ],
                    block:true,
                 }
               ]
           }
       },
</script>
```
