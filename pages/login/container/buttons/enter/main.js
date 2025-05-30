import window from "./window/main.js"

export default function enter(){
    let style = `
        {
            font-size:17px;
            background:var(--colorGreen);
            padding:10px 15px;
            border-radius:5px;
            font-weight:900;
            color:var(--colorWhite);
            transition:box-shadow 0.5s;
        }
        :focus{
            border:none;
        }
        :hover{
            box-shadow:0px 0px 0px 2px var(--colorGreen);
        }` 

    const enter = cE("button", style)
    enter.id = "enter"
    enter.innerHTML = "Entrar"

    enter.addEventListener(
        "click",
        async function a(e){
            async function wrong(inputElement, t){
                inputElement.style.animation = "wrong 1s linear 0s 1 forwards"
                let w = window(t)
                document.getElementById("root").appendChild(w)
                await new Promise(resolve => setTimeout(resolve, 100))
                w.style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 5000))
                inputElement.style.animation = ""
                w.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 500))
                document.getElementById("root").removeChild(w)
            }
            
            let type = e.target.innerHTML
            let nameInput = document.getElementById("nome")
            let pixInput = document.getElementById("chave pix")
            let emailInput = document.getElementById("email")
            let passwordInput = document.getElementById("senha")
            let obj = {name:correctName(nameInput.value),pix:pixInput.value,email:emailInput.value,password:passwordInput.value}
            // Caso tenha esquecido a senha
            if(emailInput.value == passwordInput.value && emailInput.value != undefined && emailInput.value.length > 0){
                await axios.post(`${apiURL}/login/post/userForgotPassword`,{email:emailInput.value})
                    .then(async r => {
                        let w = window("Uma senha temporária foi enviada para seu email!")
                        document.getElementById("root").appendChild(w)
                        await new Promise(resolve => setTimeout(resolve, 100))
                        w.style.opacity = 1
                        await new Promise(resolve => setTimeout(resolve, 5000))
                        w.style.opacity = 0
                        await new Promise(resolve => setTimeout(resolve, 500))
                        document.getElementById("root").removeChild(w)
                    })
                    .catch(async r => {
                        let status = r.response.status
                        if(status == 404){
                            wrong(emailInput, "Esse email não está vinculado a nenhuma conta.")
                        }
                    })
            }
            // Verificação normal
            else if(emailInput.value != "" && emailInput.value != undefined && passwordInput.value != "" && passwordInput.value != undefined){
                await axios.post(`${apiURL}/login/post/${type == "Criar" ? "userCreation" : "userLog"}`,obj)
                    .then(
                        r => {
                            construct({page:"home",data:r.data})
                        }
                    )
                    .catch(
                        r => {
                            let status = r.response.status
                            if(status == 409){
                                wrong(emailInput, "Você já possui uma conta!<br>Caso tenha esquecido sua senha, digite seu email no campo 'senha'")
                            }
                            else if(status == 403){
                                wrong(passwordInput, "Senha incorreta.<br>Caso tenha esquecido sua senha, digite seu email no campo 'senha'")
                            }
                            else if(status == 404){
                                wrong(emailInput, "Não há uma conta vinculada a esse email")
                            }
                        }
                    )
            }
        }
    )

    return(enter)
}