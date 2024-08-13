import inputs from "./inputs/main.js"
import forgotPass from "./forgotPass/main.js"
import enter from "./enter/main.js"

export default function forms(type){
    const forms = document.createElement("div")
    forms.className = "initBodyForms"

    forms.appendChild(inputs(type))
    forms.appendChild(forgotPass())
    forms.appendChild(enter(type))

    return(forms)
}