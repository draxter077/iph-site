import button from "./button/main.js"

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            color:var(--colorWhite);
        }`
    
    const buttons = cE("div", style)
    buttons.appendChild(button("Encerrar mês"))
    return(buttons)
}