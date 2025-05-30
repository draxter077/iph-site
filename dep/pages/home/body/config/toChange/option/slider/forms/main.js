import input from "./input/main.js"
import btn from "./btn/main.js"

export default function forms(data){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
        }`
    const forms = cE("div", style)
    forms.appendChild(input(data))
    forms.appendChild(btn(data.type))
    return(forms)
}