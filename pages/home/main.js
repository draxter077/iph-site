import head from "./head/main.js"
import config from "./config/main.js"
import info from "./info/main.js"
import capital from "./capital/main.js"
import movs from "./movs/main.js"

export default function home(){
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

    let data = {
        name:"Name Surname1 Surname2",
        email:"name@email.com",
        pix:"algumaChave",
        movs:[{date:"01/01/2025", type:"Depósito", value:1250, status:1},
                {date:"01/01/2025", type:"Retirada", value:-1000, status:1},
                {date:"31/01/2025", type:"Lucro", value:50, status:1},
        
                {date:"01/02/2025", type:"Retirada", value:-300, status:1},
                {date:"01/02/2025", type:"Depósito", value:1250, status:1},
                {date:"01/02/2025", type:"Retirada", value:-1000, status:1},
                {date:"31/02/2025", type:"Lucro", value:200, status:1},
        
                {date:"01/03/2025", type:"Retirada", value:-300, status:1},
                {date:"01/03/2025", type:"Depósito", value:1250, status:1},
                {date:"01/03/2025", type:"Retirada", value:-1000, status:1},
                {date:"31/03/2025", type:"Lucro", value:200, status:1}
            ]
    }

    home.appendChild(head())
    home.appendChild(config(data.name,data.email,data.pix))
    home.appendChild(info())
    home.appendChild(capital(data.movs))
    home.appendChild(movs(data.movs))
    return(home)
}