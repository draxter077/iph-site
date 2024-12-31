import inputs from "./inputs/main.js"
import forgotPass from "./forgotPass/main.js"
import enter from "./enter/main.js"

export default function forms(type){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: var(--colorWhite);
            box-shadow: 0px 0px 5px 0px var(--colorWhite);
            padding: 30px;
            border-radius: 15px;
        }`

    const forms = cE("div", style)

    forms.appendChild(inputs(type))
    forms.appendChild(forgotPass())
    forms.appendChild(enter(type))

    return(forms)
}