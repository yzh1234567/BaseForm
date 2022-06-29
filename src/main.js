import BaseForm from "./components/BaseForm/index.js"
import FormItemChild from "./components/FormItemChild/index.js"
import baseButtons from "./components/base-button/index.js"

const components=[BaseForm,FormItemChild,baseButtons]

function install(Vue){
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}

if(typeof window !=='undefined' && window.Vue){
    install(window.Vue)
}


export default{
    install,
    BaseForm,
    FormItemChild,
    baseButtons
}

export {
    BaseForm,
    FormItemChild,
    baseButtons
}