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
        <form-item-child
          :info="item"
          :form="form"
          @blur="handleBlur"
        ></form-item-child>
      </el-form-item>
      <!-- 其他插槽 -->
      <slot name="other"></slot>
      <!-- 默认插槽 -->
      <slot>
        <!-- 操作的按钮 -->
        <el-form-item>
          <el-button
            @click="handleSearch"
            :type="search.type"
            :disabled="search.disabled"
            :round="search.round"
            :circle="search.circle"
            :plain="search.round"
            :icon="search.icon"
            >{{ search.text || 搜索 }}</el-button
          >
          <el-button
            @click="handleReset"
            :type="reset.type"
            :disabled="reset.disabled"
            :round="reset.round"
            :circle="reset.circle"
            :plain="reset.round"
            :icon="reset.icon"
            >{{ reset.text || 重置 }}</el-button
          >
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
export default {
  name: "BaseForm",
  components: {
    FormItemChild,
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
    // 搜索按钮
    search: {
      type: Object,
      default() {
        return {
          type: "primary",
          plain: false,
          round: false,
          circle: false,
          disabled: false,
          icon: "",
          text: "搜索",
        }
      },
    },
    // 重置按钮
    reset: {
      type: Object,
      default() {
        return {
          type: "",
          plain: false,
          round: false,
          circle: false,
          disabled: false,
          icon: "",
          text: "重置",
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
    // 失焦
    handleBlur(e) {},
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
      this.$emit("reset")
    },
  },
}
</script>
