import BaseForm from "./index.vue"

BaseForm.install=function(Vue){
    Vue.component(BaseForm.name,BaseForm)
}

export default BaseForm