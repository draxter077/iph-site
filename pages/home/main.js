import body from "./body/main.js"
import top from "./top/main.js"

export default function home(data){
    const homeHTML = document.createElement("div")
    homeHTML.appendChild(top())
    homeHTML.appendChild(body(data))
    return(homeHTML)
}