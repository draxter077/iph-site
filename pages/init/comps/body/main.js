import constructMain from "../../../construct.js"

export default function bodyDiv(){
    return(`
        <div class="initBody">
            <div class="initBodyLogo">iPH</div>
            <div class="aboutUs">
                <div>
                    A iPH nasceu em 17/09/2023, com o objetivo de ser uma solução simples para o
                    gerenciamento do seu capital.<br><br>
                    Acreditamos que investimentos devem ser realizados seguindo três princípios:
                    lógica, estruturação e consistência. Assim, diversificamos seu capital em
                    quatro ativos: renda fixa, ações estrangeiras, ações nacionais e mercado futuro.
                    A proporção do seu capital em cada um deles será definida por oportunidades lógicas, 
                    respeitando a estrutura de um gerenciamento de risco; tudo isso seguindo a 
                    consistência de um sistema inteligente.<br><br>
                    Seja bem-vindo à iPH!
                </div>
            </div>
            <div class="toBeOpenUp">
                <div class="initBodyForms">
                    <div class="initBodyFormsInputs">
                        <input placeholder="Email">
                        <input placeholder="Senha" type="password">
                    </div>
                    <div class="initBodyFormsForgotPass"><button>Esqueceu a senha?</button></div>
                    <button>Entrar</button>
                </div>
                <div class="initBodyChangeForms"><button>Criar uma conta</button></div>
            </div>
        </div>
    `)
}

export function aboutUs(){
    const aboutUsDiv = document.getElementsByClassName("aboutUsDiv")[0]
    if(aboutUsDiv.style.maxHeight == "200px"){
        aboutUsDiv.style.maxHeight = "0px";
    }
    else{
        aboutUsDiv.style.maxHeight = "200px";
    }
}

export function changeToCreateORLogin(Event){
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

async function cleanScreen(cmUS){
    const openUpDiv = document.getElementsByClassName("toBeOpenUp")[0]
    const logo = document.getElementsByClassName("initBodyLogo")[0]
    openUpDiv.style.animation = "closeUp 1s forwards"
    logo.style.opacity = "1"
    logo.style.animation = "fadeOut 1s 1s forwards"
    await new Promise(resolve => setTimeout(resolve, 2000))
    constructMain(cmUS)
}

async function wrongAnimation(item){
    item.style.animation = "inputWrongValue 1s forwards"
    await new Promise(resolve => setTimeout(resolve, 1000))
    item.style.animation = ""
}

async function goToHome(data){
    axios.defaults.headers.common["userAuth"] = data.userInfo.id
    await cleanScreen(data)
}

async function checkLogin(inputDivChildren){
    const userEmail = inputDivChildren[0].value, userPassword = inputDivChildren[1].value
    for(let i = 0; i < 2; i++){
        if(inputDivChildren[i].value.length == 0){
            await wrongAnimation(inputDivChildren[i])
            return(false)
        }
    }
    if(userEmail == userEmail.replaceAll("@", "")){
        await wrongAnimation(inputDivChildren[0])
    }
    else{
        await axios.post("https://ace-chimp-merry.ngrok-free.app/userAcess", {userEmail: userEmail, userPassword: userPassword})
            .then(async resposta => {
                await goToHome(resposta.data)
            })
            .catch(async response => {
                let errorStatus = response.response.status
                if(errorStatus == 404){
                    await wrongAnimation(inputDivChildren[0])
                }
                else if(errorStatus == 401){
                    await wrongAnimation(inputDivChildren[1])
                }
            })
    }
}

async function checkNewAccount(inputDivChildren){
    for(let i = 0; i < 5; i++){
        if(inputDivChildren[i].value.length == 0){
            await wrongAnimation(inputDivChildren[i])
            return(false)
        }
    }
    const userName = inputDivChildren[0].value, 
        userEmail = inputDivChildren[1].value, 
        userPix = inputDivChildren[2].value, 
        userPassword = inputDivChildren[3].value, 
        userConfPassword = inputDivChildren[4].value
    if(userConfPassword != userPassword){
        await wrongAnimation(inputDivChildren[4])
    }
    else if(userEmail == userEmail.replaceAll("@", "")){
        await wrongAnimation(inputDivChildren[1])
    }
    else{
        await axios.post("https://ace-chimp-merry.ngrok-free.app/userCreation", {userName: userName, userEmail: userEmail, userPix: userPix, userPassword: userPassword})
            .then(async resposta => {
                await goToHome(resposta.data)
            })
            .catch(async response => {
                let errorStatus = response.response.status
                if(errorStatus == 404){
                    await wrongAnimation(inputDivChildren[0])
                }
                else if(errorStatus == 409){
                    await wrongAnimation(inputDivChildren[1])
                }
            })
    }
}

export async function checkCredentialsAndGoToHome(Event){
    const btn = Event.target
    btn.disabled = true
    const inputDivChildren = btn.parentElement.children[0].children
    const numberInputs = inputDivChildren.length
    if(numberInputs == 2){
        checkLogin(inputDivChildren)
    }
    else{
        checkNewAccount(inputDivChildren)
    }
    btn.disabled = false
}

export async function forgotPassword(Event){
    Event.target.disabled = true
    const input = document.getElementsByClassName("initBodyFormsInputs")[0].children[0]
    if(input.value.length == 0){
        await wrongAnimation(input)
    }
    else{
        const userEmail = input.value
        await axios.post("https://ace-chimp-merry.ngrok-free.app/forgotPassword", {userEmail: userEmail})
            .then(async resposta => {
                input.value = "Nova senha enviada"
                await new Promise(resolve => setTimeout(resolve, 3000))
                input.value = userEmail
            })
            .catch(async response => {
                if(response.response.status == 404){
                    await wrongAnimation(input)
                }
            })
    }
    Event.target.disabled = false
}