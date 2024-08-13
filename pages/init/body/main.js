import logo from "./logo/main.js"
import aboutUs from "./aboutUs/main.js"
import forms from "./forms/main.js"
import changeForms from "./changeForms/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "initBody"

    body.appendChild(logo())
    body.appendChild(aboutUs())
    body.appendChild(forms("login"))
    body.appendChild(changeForms())

    return(body)
}