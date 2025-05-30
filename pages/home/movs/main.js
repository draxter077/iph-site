import title from "./title/main.js"
import list from "./list/main.js"

export default function movs(ms){
    let style = `
        {
            display;flex;
            flex-direction:column;
            width:65%;
            height:260px;
            opacity:0;
            animation:opacity 1s linear 1s 1 forwards;
        }
        :responsive{
            width:95%;
        }`

    const movs = cE("div", style)
    movs.appendChild(title())
    movs.appendChild(list(ms))
    return(movs)
}