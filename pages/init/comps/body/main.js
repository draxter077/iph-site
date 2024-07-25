import constructMain from "../../../construct.js"

export default function bodyDiv(){
    return(`
        <div class="initBodyContentDiv">
            <div class="initBodyLogo">iPH</div>
            <div class="toBeOpenUp">
                <div class="initBodyFormsDiv">
                    <div class="initBodyFormsInputs">
                        <input class="initBodyInput" placeholder="Email">
                        <input class="initBodyInput" placeholder="Senha" type="password">
                    </div>
                    <div class="initBodyFormsForgotPassDiv"><button class="initBodyFormsForgotPassButton">Esqueceu a senha?</button></div>
                    <button class="initBodyFormsButton">Entrar</button>
                </div>
                <div class="initBodyFormsCreateAccountDiv"><button class="initBodyFormsCreateAccountButton">Criar uma conta</button></div>
            </div>
        </div>
    `)
}

export function changeToCreateORLogin(Event){
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
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function checkCredentialsAndGoToHome(Event){
    const btn = Event.target
    const inputDivChildren = btn.parentElement.children[0].children
    const numberInputs = inputDivChildren.length
    if(numberInputs == 2){
        const userEmail = inputDivChildren[0].value, userPassword = inputDivChildren[1].value
        await axios.post("https://ace-chimp-merry.ngrok-free.app/userAcess", {userEmail: userEmail, userPassword: userPassword})
            .then(async resposta => {
                let a = resposta.data
                axios.defaults.headers.common["userAuth"] = a.userID
                const openUpDiv = document.getElementsByClassName("toBeOpenUp")[0]
                const logo = document.getElementsByClassName("initBodyLogo")[0]
                openUpDiv.style.animation = "closeUp 1s forwards"
                logo.style.opacity = "1"
                logo.style.animation = "fadeOut 1s 1s forwards"
                await sleep(2000)
                constructMain({userLog: a.userID})
            })
            .catch(response => {console.log(response)})
    }
}