import body from "./body/main.js"

export default function init(){
    const init = document.createElement("div")
    init.appendChild(body())
    return(init)
}