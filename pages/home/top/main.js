export default function top(){
    const top = document.createElement("div")
    top.className = "homeTop"
    
    const logo = document.createElement("div")
    logo.innerHTML = "iPH"
    top.appendChild(logo)

    return(top)
}