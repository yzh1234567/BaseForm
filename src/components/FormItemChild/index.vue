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
      let slots = element.slots
      let attrs = this.depCopy(element,['on','slots','scopedSlots','nativeOn','slot'])
      let ele =  this.depCopy(element,['slots'])
      let renderObj = {
        ...ele,
        attrs: { ...attrs },
      }
      let tag = element.tag || "el-input"
      if (element.tag === "el-select") {
        return (
          <tag {...renderObj} vModel={this.form[element.name]}>
            {
              slots?this.productSlots(slots):
              element.options.map((e, index) => {
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
            {
              slots?this.productSlots(slots):
              element.options.map((e, index) => {
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
        >
        {slots&&this.productSlots(slots)}
        </tag>
      )
    },
    productSlots(slots){
         return Object.keys(slots).map((key,index)=>{
            return (
              <div slot={key} key={index}>
               {slots[key]()}
              </div>
            )
          })
    },
    depCopy(obj,arr=[]){
       if(!Array.isArray(arr)){
        arr = []
       }
       let attrs = {}
       for(let key in obj){
         if(!arr.includes(key)){
          attrs[key] = obj[key]
         }
       }
       return attrs
    }
  },
}
</script>
