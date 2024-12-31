import body from "./body/main.js"
import top from "./top/main.js"

export default function home(data){
    let style = `
        {
            width: 100%;
            height: 100dvh;
        }`
    const home = cE("div", style)
    home.appendChild(top())
    home.appendChild(body(data))
    return(home)
}