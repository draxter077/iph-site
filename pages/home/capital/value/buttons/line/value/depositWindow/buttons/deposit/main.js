import window from "./window/main.js"

export default function deposit(){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            background:var(--colorBlack);
            border-radius:5px;
            padding:10px 15px;
            cursor:pointer;
            transition:background 0.5s;
        }
        :hover{
            background:var(--colorGreen);
        }`

    const deposit = cE("div", style)
    deposit.innerHTML = "Concluir"
    deposit.addEventListener(
        "click",
        async function a(e){
            let w = window("Seu depósito está em andamento")
            document.getElementById("root").appendChild(w)
            await new Promise(resolve => setTimeout(resolve, 100))
            w.style.opacity = 1
            await new Promise(resolve => setTimeout(resolve, 5000))
            w.style.opacity = 0
            await new Promise(resolve => setTimeout(resolve, 500))
            document.getElementById("root").removeChild(w)

            let depositWindow = e.target.parentElement.parentElement
            depositWindow.style.transform = "scale(0)"
            await new Promise(resolve => setTimeout(resolve, 500))
            document.getElementById("root").removeChild(depositWindow)
        }
    )
    return(deposit)
}