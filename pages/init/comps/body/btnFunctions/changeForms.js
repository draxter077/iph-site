import checkCredentialsAndGoToHome from "./sendForms.js"

export default function changeToCreateORLogin(Event){
    const formsDiv = document.getElementsByClassName("initBodyFormsDiv")[0]
    const btn = Event.target
    formsDiv.innerHTML = ""
    if(btn.innerHTML == "Criar uma conta"){
        formsDiv.innerHTML = `
            <div class="initBodyFormsInputs">
                <input class="initBodyInput" placeholder="Nome">
                <input class="initBodyInput" placeholder="Email">
                <input class="initBodyInput" placeholder="Chave Pix">
                <input class="initBodyInput" placeholder="Senha" type="password">
                <input class="initBodyInput" placeholder="Confirmar Senha" type="password">
            </div>
            <button class="initBodyFormsButton">Criar conta</button>`
        btn.innerHTML = "Entrar em uma conta"
    }
    else{
        formsDiv.innerHTML = `
            <div class="initBodyFormsInputs">
                <input class="initBodyInput" placeholder="Email">
                <input class="initBodyInput" placeholder="Senha" type="password">
            </div>
            <div class="initBodyFormsForgotPassDiv"><button class="initBodyFormsForgotPassButton">Esqueceu a senha?</button></div>
            <button class="initBodyFormsButton">Entrar</button>`
        btn.innerHTML = "Criar uma conta"
    }
    document.getElementsByClassName("initBodyFormsButton")[0].onclick = function a(Event){checkCredentialsAndGoToHome(Event)}
}