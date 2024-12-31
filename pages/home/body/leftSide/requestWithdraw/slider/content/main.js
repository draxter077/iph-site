import input from "./input/main.js"
import btn from "./btn/main.js"

export default function content(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            width: 50%;
        }`
    const content = cE("div", style)
    content.appendChild(input())
    content.appendChild(btn())
    return(content)
}