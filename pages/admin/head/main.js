import logo from "./logo/main.js"
import input from "./input/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:100%;
        }`

    const head = cE("div", style)
    head.appendChild(logo())
    head.appendChild(input())
    head.appendChild(input())
    return(head)
}