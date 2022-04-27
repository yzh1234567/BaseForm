<script>
export default {
  name: "FormItemChild",
  props: {
    info: {
      type: Object,
      default() {
        return {
          name: "",
          placeholder: "请选择",
          value: "",
          options: [],
          type: "text",
        }
      },
    },
    form: {
      type: Object,
      default() {
        return {}
      },
    }
  },
  render() {
    return this.renderItem(this.info)
  },
  methods: {
    productValue(e) {
      this.form[this.info.name] = e
    },
    renderItem(element) {
      let renderObj = {
         ...element,
         attrs:{...element}
      }
      if (["text", "textarea"].includes(element.type)) {
        console.log(this.form[element.name])
        return (
          <el-input
            {...renderObj}
            vModel={this.form[element.name]}
            onBlur={(e) => {
              this.$emit("blur", e)
            }}
          ></el-input>
        )
      }
      if (element.type === "select") {
        return (
          <el-select 
             {...renderObj}
             vModel={this.form[element.name]}
            >
            {element.options.map((e, index) => {
              return (
                <el-option
                  label={e.label}
                  value={e.value}
                  key={index}
                ></el-option>
              )
            })}
          </el-select>
        )
      }
      if (
        [
          "year",
          "month",
          "date",
          "week",
          "datetime",
          "datetimerange",
          "daterange",
        ].includes(element.type)
      ) {
        return (
          <el-date-picker
            {...renderObj}
            vModel={this.form[element.name]}
          ></el-date-picker>
        )
      }
      if (element.type === "checkbox") {
        return (
          <el-checkbox-group
            {...renderObj}
            vModel={this.form[element.name]}
          >
            {element.options.map((e, index) => {
              return element.block ? (
                <el-col>
                  <el-checkbox label={e.value} key={index}>
                    {e.label}
                  </el-checkbox>
                </el-col>
              ) : (
                <el-checkbox label={e.value} key={index}>
                  {e.label}
                </el-checkbox>
              )
            })}
          </el-checkbox-group>
        )
      }
      if (element.type === "radio") {
        return (
          <el-radio-group
            {...renderObj}
            vModel={this.form[element.name]}
          >
            {element.options.map((e, index) => {
              return element.block ? (
                <el-col>
                  <el-radio label={e.value} key={index}>
                    {e.label}
                  </el-radio>
                </el-col>
              ) : (
                <el-radio label={e.value} key={index}>
                  {e.label}
                </el-radio>
              )
            })}
          </el-radio-group>
        )
      }
      if (element.type === "number") {
        return (
          <el-input-number
            {...renderObj}
            vModel={this.form[element.name]}
          ></el-input-number>
        )
      }
      if (element.type === "switch") {
        return (
          <el-switch
            {...renderObj}
            vModel={this.form[element.name]}
          ></el-switch>
        )
      }
      if (element.type === "slider") {
        return (
          <el-slider
            {...renderObj}
            vModel={this.form[element.name]}
          ></el-slider>
        )
      }
      if (element.type === "transfer") {
        return (
          <el-transfer
            {...renderObj}
            vModel={this.form[element.name]}
          ></el-transfer>
        )
      }
      if(element.type === 'timePicker'){
        return (
          <el-time-picker
            {...renderObj}
            vModel={this.form[element.name]}
          >
          </el-time-picker>
        )
      }
      if(element.type === 'timeSelect'){
        return (
          <el-time-select
            {...renderObj}
            vModel={this.form[element.name]}
          >
          </el-time-select>
        )
      }
      if( element.type ==='cascader'){
        return (
           <el-cascader
              {...renderObj}
              vModel={this.form[element.name]}
           ></el-cascader>
        )
      }
      if(element.type === 'rate'){
        return (
           <el-rate
              {...renderObj}
              vModel={this.form[element.name]}
           ></el-rate>
        )
      }
    },
  },
}
</script>
