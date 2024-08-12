export function aboutUs(){
    const aboutUsDiv = document.getElementsByClassName("aboutUs")[0]
    if(aboutUsDiv.style.maxHeight == "200px"){
        aboutUsDiv.style.maxHeight = "0px";
    }
    else{
        aboutUsDiv.style.maxHeight = "200px";
    }
}

export default function logo(){
    const logo = document.createElement("div")
    logo.className = "initBodyLogo"
    logo.innerHTML = "iPH"
    logo.onclick = aboutUs
    return(logo)
}