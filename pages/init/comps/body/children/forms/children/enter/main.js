import construct from "../../../../../../../construct.js"

async function cleanScreen(cmUS){
    const body = document.getElementsByClassName("initBody")[0]
    body.style.opacity = "1"
    body.style.animation = "fadeOut 1s 1s forwards"
    await new Promise(resolve => setTimeout(resolve, 2000))
    construct(cmUS)
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
                console.log(resposta)
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

async function check(Event){
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

export default function enter(type){
    const entrar = document.createElement("button")

    if(type == "login"){
        entrar.innerHTML = "Entrar"
    }
    else if(type == "createAccount"){
        entrar.innerHTML = "Criar"
    }
    
    entrar.onclick = check
    return(entrar)
}