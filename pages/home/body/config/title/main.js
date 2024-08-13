function closeConfig(){
    document.getElementsByClassName("homeBodyConfig")[0].style.left = "-100%";
    for(let i = 1; i < document.getElementsByClassName("homeBody")[0].children.length; i++){
        document.getElementsByClassName("homeBody")[0].children[i].style = "opacity: 1;";
    }
}

export default function title(data){
    const title = document.createElement("div")
    title.className = "homeBodyConfigTitle"
    title.innerHTML = "Olá, " + data.name.split(" ")[0]

    const closeButton = document.createElement("button")
    closeButton.onclick = closeConfig
    closeButton.innerHTML = "Fechar"
    title.appendChild(closeButton)

    return(title)
}