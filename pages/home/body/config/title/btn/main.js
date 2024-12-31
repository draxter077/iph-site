export default function btn(){
    let style = `
        {
            background: none;
            color: var(--colorBlack);
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorGreen);
        }`
    const btn = cE("button", style)
    btn.onclick = closeConfig
    btn.innerHTML = "Fechar"
    return(btn)
}

function closeConfig(Event){
    const config = Event.target.parentElement.parentElement
    config.style.left = "-100%"
}