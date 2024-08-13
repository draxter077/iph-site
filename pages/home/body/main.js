import config from "./config/main.js"
import leftSide from "./leftSide/main.js"
import rightSide from "./rightSide/main.js"

export default function body(data){
    const body = document.createElement("div")
    body.className = "homeBody"
    body.appendChild(config(data.userInfo))
    body.appendChild(leftSide(data.userInfo))
    body.appendChild(rightSide(data))
    return(body)
}