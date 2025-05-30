import enter from './enter/main.js'
import change from './change/main.js'

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:20%;
            margin:20px 0px 0px 0px;
        }
        :responsive{
            width:80%;
        }`

    const buttons = cE("div", style)
    buttons.appendChild(enter())
    buttons.appendChild(change())
    return(buttons)
}