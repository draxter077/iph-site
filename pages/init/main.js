import body from "./body/main.js"

export default function init(){
    let style = `
        {
            width: 100%;
            height: 100dvh;
            opacity: 0;
            animation: fadeIn var(--transitionTime) var(--animationDelay0) forwards;
        }`
    const init = cE("div", style)
    init.appendChild(body())
    return(init)
}