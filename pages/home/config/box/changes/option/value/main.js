import window from "./window/main.js"

export default function value(v,t){
    let style = `
        {
            width:100%;
            font-size:16px;
            padding:0px 5px;
            border-bottom:1px solid var(--colorWhite);
            transition:border-bottom 0.5s;
        }
        :hover{
            border-bottom:1px solid var(--colorGreen);
        }`

    const value = cE("input", style)
    value.value = v
    value.addEventListener(
        "keypress",
        async function a(e){
            if(e.key == "Enter"){
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
                if(t == "senha"){t = "password"}
                if(t == "chave Pix"){t = "pix"}
                await axios.post(`${apiURL}/home/post/changeInfo`,{type:t,newInfo:value.value})
                    .then(async r => {
                        await showWindow("Alteração feita com sucesso")
                    })
                    .catch(async r => {
                        await showWindow("Algo deu errado")
                        console.log(r.response)
                    })
            }
        }
    )
    return(value)
}