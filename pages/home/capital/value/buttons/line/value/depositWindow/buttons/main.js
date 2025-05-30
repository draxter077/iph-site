import cancel from "./cancel/main.js"
import deposit from "./deposit/main.js"

export default function buttons(input){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:70%;
        }`

    const buttons = cE("div", style)
    buttons.appendChild(cancel(input))
    buttons.appendChild(deposit(input))
    return(buttons)
}