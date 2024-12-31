import title from "./title/main.js"

export default function openConfig(){
    let style = `
        {
            background: var(--colorWhite);
            padding: 20px 25px;
            border-radius: 20px;
            width: 100%;
            cursor: pointer;
            color: var(--colorBlack);
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorGreen);
        }`
    const openConfig = cE("div", style)
    openConfig.onclick = open
    openConfig.appendChild(title())
    return(openConfig)
}

function open(){
    let body = document.getElementById("root").children[0]
    let bodyConfig = body.children[1].children[0]
    bodyConfig.style.left = "0%";
    bodyConfig.scrollIntoView({behavior: "smooth"})
}