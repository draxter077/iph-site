import title from "./title/main.js"
import toChange from "./toChange/main.js"
import disclaimer from "./disclaimer/main.js"

export default function config(data){
    const config = document.createElement("div")
    config.className = "homeBodyConfig"
    config.appendChild(title(data))
    config.appendChild(toChange(data))
    config.appendChild(disclaimer())
    return(config)
}