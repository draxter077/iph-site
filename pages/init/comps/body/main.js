import logo from "./children/logo/main.js"
import aboutUs from "./children/aboutUs/main.js"
import forms from "./children/forms/main.js"
import changeForms from "./children/changeForms/main.js"

export default function body(){
    const body = document.createElement("div")
    body.className = "initBody"

    body.appendChild(logo())
    body.appendChild(aboutUs())
    body.appendChild(forms("login"))
    body.appendChild(changeForms())

    return(body)
}