import head from "./head/main.js"
import config from "./config/main.js"
import info from "./info/main.js"
import capital from "./capital/main.js"
import movs from "./movs/main.js"

export default function home(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }
        @keyframes opacity{
            0%[opacity:0]
            100%[opacity:1]
        }`

    const home = cE("div", style)
    home.appendChild(head())
    home.appendChild(config(data.name,data.email,data.pix))
    home.appendChild(info())
    home.appendChild(capital(data.movs))
    home.appendChild(movs(data.movs))
    return(home)
}