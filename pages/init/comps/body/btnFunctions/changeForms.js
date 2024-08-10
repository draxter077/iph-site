import checkCredentialsAndGoToHome from "./sendForms.js"

export default function changeToCreateORLogin(Event){
    const formsDiv = document.getElementsByClassName("initBodyForms")[0]
    const btn = Event.target
    formsDiv.innerHTML = ""
    if(btn.innerHTML == "Criar uma conta"){
        formsDiv.innerHTML = `
            <div class="initBodyFormsInputs">
                <input placeholder="Nome">
                <input placeholder="Email">
                <input placeholder="Chave Pix">
                <input placeholder="Senha" type="password">
                <input placeholder="Confirmar Senha" type="password">
            </div>
            <button>Criar conta</button>`
        btn.innerHTML = "Entrar em uma conta"
    }
    else{
        formsDiv.innerHTML = `
            <div class="initBodyFormsInputs">
                <input placeholder="Email">
                <input placeholder="Senha" type="password">
            </div>
            <div class="initBodyFormsForgotPass"><button>Esqueceu a senha?</button></div>
            <button>Entrar</button>`
        btn.innerHTML = "Criar uma conta"
    }
    document.getElementsByClassName("initBodyForms")[0].children[2].onclick = function a(Event){checkCredentialsAndGoToHome(Event)}
}