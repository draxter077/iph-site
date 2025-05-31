import window from "./window/main.js"

export default function withdraw(input){
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

    const withdraw = cE("div", style)
    withdraw.innerHTML = "Retirar"
    withdraw.addEventListener(
        "click",
        async function a(e){
            async function showWindow(t){
                let w = window(t)
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 100))
                w.style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 5000))
                w.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 500))
                document.getElementById("root").removeChild(w)
            }

            await axios.post(`${apiURL}/home/post/userWithdraw`,{value:Number(input.value.toString().replaceAll("R$ ", "").replaceAll(".","").replaceAll(",","."))})
                .then(async r => {
                    showWindow("Sua retirada está em andamento")
                })
                .catch(async r => {showWindow("Algo deu errado!");console.log(r.response)})

            let withdrawWindow = e.target.parentElement.parentElement
            withdrawWindow.style.transform = "scale(0)"
            await new Promise(resolve => setTimeout(resolve, 500))
            withdrawWindow.getElementById("root").removeChild(withdrawWindow)
        }
    )
    return(withdraw)
}