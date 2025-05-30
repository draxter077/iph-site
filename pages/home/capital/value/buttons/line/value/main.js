import depositWindow from "./depositWindow/main.js"
import withdrawWindow from "./withdrawWindow/main.js"

export default function value(){
    let style = `
        {
            color:var(--colorWhite);
            text-align:center;
            border-bottom:1px solid var(--colorGreen);
            padding:0px 5px;
        }
        ::placeholder{
            color:var(--colorWhite);
            font-style:italic;
        }`
    const value = cE("input", style)
    value.placeholder = "Digite o valor (1234,56)"
    value.type = "number"

    function blur(e){document.getElementById("list").removeChild(e.target.parentElement)}

    value.addEventListener(
        "blur",
        blur
    )

    value.addEventListener(
        "keypress",
        async function a(e){
            if(e.key == "Enter"){
                value.removeEventListener("blur", blur)
                let valor = e.target.value.replaceAll(".", "").replaceAll(",", ".")
                if(e.target.parentElement.children[0].innerHTML.split(" ")[1] == "depósito"){
                    e.target.parentElement.children[0].innerHTML = "Depósito em andamento"
                    e.target.disabled = true
                    let w = await depositWindow(e.target)
                    document.getElementById("root").appendChild(w)
                    await new Promise(resolve => setTimeout(resolve, 10))
                    w.style.transform = "scale(1)"
                    e.target.type = "text"
                    e.target.value = "R$ " + e.target.value
                    e.target.style.border = "none"
                }
                else{
                    e.target.parentElement.children[0].innerHTML = "Retirada em andamento"
                    e.target.disabled = true
                    let w = await withdrawWindow(e.target)
                    document.getElementById("root").appendChild(w)
                    await new Promise(resolve => setTimeout(resolve, 10))
                    w.style.transform = "scale(1)"
                    e.target.type = "text"
                    e.target.value = "R$ " + e.target.value
                    e.target.style.border = "none"
                }
                value.removeEventListener("keypress", a)
            }
        }
    )
    return(value)
}