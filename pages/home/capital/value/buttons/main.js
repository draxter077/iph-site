import deposit from "./deposit/main.js"
import withdraw from "./withdraw/main.js"

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            width:100%;
        }`

    const buttons = cE("div", style)
    buttons.appendChild(deposit())
    buttons.appendChild(withdraw())
    return(buttons)
}