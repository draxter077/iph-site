import config from "./config/main.js"
import logo from "./logo/main.js"
import info from "./info/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            width:100%;
            opacity:0;
            animation:opacity 1s linear 0s 1 forwards;
        }`

    const head = cE("div", style)
    head.appendChild(config())
    head.appendChild(logo())
    head.appendChild(info())
    return(head)
}