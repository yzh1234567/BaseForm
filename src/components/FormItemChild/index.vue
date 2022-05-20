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
    },
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
        attrs: { ...element },
      }
      let tag = element.tag || "el-input"
      if (element.tag === "el-select") {
        return (
          <tag {...renderObj} vModel={this.form[element.name]}>
            {element.options.map((e, index) => {
              let attrs = {
                ...e,
                attrs: { ...e },
              }
              return (
                <el-option
                  {...attrs}
                  label={e.label}
                  value={e.value}
                  key={index}
                ></el-option>
              )
            })}
          </tag>
        )
      }
      if (["el-checkbox-group"].includes(element.tag)) {
        let tag1 = element.tag.includes("el-checkbox")
          ? "el-checkbox"
          : "el-radio"
        tag1 = element.button ? `${tag1}-button` : tag1
        return (
          <tag {...renderObj} vModel={this.form[element.name]}>
            {element.options.map((e, index) => {
              let attrs = {
                ...e,
                attrs: { ...e },
              }
              return element.block ? (
                <el-col>
                  <tag1 {...attrs} label={e.value} key={index}>
                    {e.label}
                  </tag1>
                </el-col>
              ) : (
                <tag1 {...attrs} label={e.value} key={index}>
                  {e.label}
                </tag1>
              )
            })}
          </tag>
        )
      }
       if ( ["el-radio-group",'el-radio'].includes(element.tag)) {
        return (
            <div>{
              element.options.map((e, index) => {
                let attrs ={
                  ...e,
                  attrs:{...e}
                }
                return element.block ? (
                  <el-col key={index}>
                    <el-radio {...attrs}  
                       label={e.value} 
                       vModel={this.form[element.name]} 
                      >
                      {e.label}
                    </el-radio>
                  </el-col>
                ) : (
                  <el-radio {...attrs}  
                       label={e.value} 
                       vModel={this.form[element.name]} 
                      >
                    {e.label}
                  </el-radio>
                )
              })
            }</div>
        )
      }
      return (
        <tag
          {...renderObj}
          vModel={this.form[element.name]}
        ></tag>
      )
      // if (element.tag === "el-checkbox-group") {
      //   return (
      //     <tag
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     >
      //       {element.options.map((e, index) => {
      //         let attrs ={
      //           ...e,
      //           attrs:{...e}
      //         }
      //         return element.block ? (
      //           <el-col>
      //             <el-checkbox {...attrs} label={e.value} key={index}>
      //               {e.label}
      //             </el-checkbox>
      //           </el-col>
      //         ) : (
      //           <el-checkbox {...attrs} label={e.value} key={index}>
      //             {e.label}
      //           </el-checkbox>
      //         )
      //       })}
      //     </tag>
      //   )
      // }
      // if (element.tag === "el-radio-group") {
      //   return (
      //     <tag
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     >
      //       {element.options.map((e, index) => {
      //         let attrs ={
      //           ...e,
      //           attrs:{...e}
      //         }
      //         return element.block ? (
      //           <el-col>
      //             <el-radio {...attrs} label={e.value} key={index}>
      //               {e.label}
      //             </el-radio>
      //           </el-col>
      //         ) : (
      //           <el-radio {...attrs} label={e.value} key={index}>
      //             {e.label}
      //           </el-radio>
      //         )
      //       })}
      //     </tag>
      //   )
      // }
      // if (element.type === "number") {
      //   return (
      //     <el-input-number
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     ></el-input-number>
      //   )
      // }
      // if (element.type === "switch") {
      //   return (
      //     <el-switch
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     ></el-switch>
      //   )
      // }
      // if (element.type === "slider") {
      //   return (
      //     <el-slider
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     ></el-slider>
      //   )
      // }
      // if (element.type === "transfer") {
      //   return (
      //     <el-transfer
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     ></el-transfer>
      //   )
      // }
      // if(element.type === 'timePicker'){
      //   return (
      //     <el-time-picker
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     >
      //     </el-time-picker>
      //   )
      // }
      // if(element.type === 'timeSelect'){
      //   return (
      //     <el-time-select
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     >
      //     </el-time-select>
      //   )
      // }
      // if( element.type ==='cascader'){
      //   return (
      //      <el-cascader
      //         {...renderObj}
      //         vModel={this.form[element.name]}
      //      ></el-cascader>
      //   )
      // }
      // if(element.type === 'rate'){
      //   return (
      //      <el-rate
      //         {...renderObj}
      //         vModel={this.form[element.name]}
      //      ></el-rate>
      //   )
      // }
      //     if (
      //   [
      //     "year",
      //     "month",
      //     "date",
      //     "week",
      //     "datetime",
      //     "datetimerange",
      //     "daterange",
      //   ].includes(element.type)
      // ) {
      //   return (
      //     <el-date-picker
      //       {...renderObj}
      //       vModel={this.form[element.name]}
      //     ></el-date-picker>
      //   )
      // }
    },
  },
}
</script>
