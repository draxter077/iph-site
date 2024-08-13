function open(){
    for(let i = 1; i < document.getElementsByClassName("homeBody")[0].children.length; i++){
        document.getElementsByClassName("homeBody")[0].children[i].style = "transition: opacity var(--transitionTime); opacity: 0.5 !important;";
    }
    document.getElementsByClassName("homeBodyConfig")[0].style.left = "0%";
    document.getElementsByClassName("homeBodyConfig")[0].scrollIntoView({behavior: "smooth"})
}

export default function openConfig(){
    const openConfig = document.createElement("div")
    openConfig.onclick = open
    openConfig.className = "homeBodyLeftSideOpenConfig"
        const title = document.createElement("div")
        title.innerHTML = "Configurações"
        openConfig.appendChild(title)
    return(openConfig)
}