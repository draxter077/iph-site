import body from "./body/main.js"

export default function init(){
    let style = `
        {
            width: 100%;
            height: 100dvh;
        }`

    const init = cE("div", style)
    init.appendChild(body())
    return(init)
}