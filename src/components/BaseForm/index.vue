<template>
  <div>
    <el-form
      :size="size"
      :model="form"
      ref="formJSX"
      :label-width="labelWidth"
      :inline="inline"
      v-bind="$attrs"
    >
      <el-form-item
        v-for="(item, index) of fields"
        :key="index"
        :label="item.label"
        :prop="item.name"
        :rules="item.rules"
      >
        <!-- 有自定义组件需求时;自定义组件插槽内容-->
        <slot name="self" :data="item">
          <form-item-child :info="item" :form="form"></form-item-child>
        </slot>
      </el-form-item>
      <!-- 其他插槽 -->
      <slot name="other"></slot>
      <!-- 默认插槽 -->
      <slot>
        <!-- 操作的按钮 -->
        <el-form-item>
          <base-buttons :operation="optetions"></base-buttons>
        </el-form-item>
      </slot>
      <!-- 操作操作 -->
      <slot name="operate">
        <!-- 其他的操作按钮 -->
      </slot>
    </el-form>
  </div>
</template>
<script>
import FormItemChild from "../FormItemChild/index.vue"
import baseButtons from "../base-button/index.vue"
export default {
  name: "BaseForm",
  components: {
    FormItemChild,
    baseButtons,
  },
  props: {
    // 表单组件的数组对象
    fields: {
      type: Array,
      default() {
        return []
      },
    },
    size: {
      type: String,
      default: "small",
    },
    diasbled: {
      type: Boolean,
      default: false,
    },
    labelWidth: {
      type: String,
      default: "0px",
    },
    // 表单元素值
    form: {
      type: Object,
      default() {
        return {}
      },
    },
    // 自定义按钮组属性及事件
    operation: {
      type: Object,
      default() {
        return {
          btns: [
            {
              type: "primary",
              plain: false,
              round: false,
              circle: false,
              disabled: false,
              icon: "",
              text: "搜索",
              on: {
                click: this.handleSearch,
              },
            },
            {
              type: "",
              plain: false,
              round: false,
              circle: false,
              disabled: false,
              icon: "",
              text: "重置",
              on: {
                click: this.handleReset,
              },
            },
          ],
        }
      },
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    // @vuese
    //返回表单的是否通过规则验证
    validate() {
      let res = false
      this.$refs.formJSX.validate((valid) => {
        res = valid
      })
      return res
    },
    // @vuese
    // 重置表单的验证规则
    resetValid() {
      this.$refs.formJSX.resetFields()
    },
    // 搜索
    /**
     * @vuese
     * 搜索按钮的点击事件
     * @arg
     */
    async handleSearch() {
      this.$refs.formJSX.validate((valid) => {
        console.log(valid)
        if (valid) {
          console.log(this.form)
          this.$emit("submit")
        }
      })
    },
    //@vuese
    //重置按钮的点击事件
    //
    handleReset() {
      this.$refs.formJSX.resetFields()
      this.$emit("resetBtn")
    },
  },
  computed: {
    optetions() {
      let obj = {}
      for (let key in this.operation) {
        if (key === "btns") {
          obj.btns = this.operation[key].map((item, i) => {
            if (!item.on) {
              item.on = {
                click: i === 0 ? this.handleSearch : this.handleReset,
              }
            }
            return item
          })
        } else {
          obj[key] = this.operation[key]
        }
      }
      return obj
    },
  },
}
</script>
