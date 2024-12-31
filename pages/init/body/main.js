import logo from "./logo/main.js"
import forms from "./forms/main.js"
import changeForms from "./changeForms/main.js"

export default function body(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }`

    const body = cE("div", style)

    body.appendChild(logo())
    body.appendChild(forms("login"))
    body.appendChild(changeForms())
    
    return(body)
}