import logo from "./logo/main.js"
import container from "./container/main.js"

export default function login(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100dvh;
        }
        @keyframes opacity{
            0%[opacity:0]
            100%[opacity:1]
        }`

    const login = cE("div", style)
    login.appendChild(logo())
    login.appendChild(container())
    return(login)
}