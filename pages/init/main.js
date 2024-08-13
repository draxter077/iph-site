import body from "./body/main.js"

export default function init(){
    const initHTML = document.createElement("div")
    initHTML.appendChild(body())
    return(initHTML)
}