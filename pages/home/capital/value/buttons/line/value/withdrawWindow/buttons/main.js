import cancel from "./cancel/main.js"
import withdraw from "./withdraw/main.js"

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
    buttons.appendChild(withdraw(input))
    return(buttons)
}