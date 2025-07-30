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

    function blur(e){document.getElementById("list").removeChild(e.target.parentElement)}

    value.addEventListener(
        "blur",
        blur
    )

    value.value = "R$ "
    value.addEventListener(
        "input",
        function a(e){
            let v = e.target.value.replaceAll(".","").replaceAll(",","").replaceAll("R$ ","")
            let nS = "R$ "
            for(let i = 0; i < v.length; i++){
                let c = v[i]
                if(i == v.length - 2){nS += ","}
                else if(i < v.length - 2 && (v.length - 2 - i)%3 == 0 && i != 0){nS += "."}
                nS += c
            }
            e.target.value = nS
        }
    )

    value.addEventListener(
        "keypress",
        async function a(e){
            if(e.key == "Enter"){
                value.removeEventListener("blur", blur)
                if(e.target.parentElement.children[0].innerHTML.split(" ")[1] == "depósito"){
                    e.target.parentElement.children[0].innerHTML = "Depósito em andamento"
                    e.target.disabled = true
                    let w = await depositWindow(e.target)
                    document.getElementById("root").appendChild(w)
                    await new Promise(resolve => setTimeout(resolve, 10))
                    w.style.transform = "scale(1)"
                    e.target.style.border = "none"
                }
                else{
                    e.target.parentElement.children[0].innerHTML = "Retirada em andamento"
                    e.target.disabled = true
                    let w = await withdrawWindow(e.target)
                    document.getElementById("root").appendChild(w)
                    await new Promise(resolve => setTimeout(resolve, 10))
                    w.style.transform = "scale(1)"
                    e.target.style.border = "none"
                }
                value.removeEventListener("keypress", a)
            }
        }
    )
    return(value)
}