import config from "./config/main.js"
import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function body(data){
    let style = `
        {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            transition: opacity var(--transitionTime);
        }
        :responsive{
            flex-direction: column;
        }`
    const body = cE("div", style)
    body.appendChild(config(data.userInfo))
    body.appendChild(leftSide(data.userInfo))
    body.appendChild(rightSide(data))
    return(body)
}