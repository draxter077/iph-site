import construct from "../../../../construct.js"

export default function enter(type){
    let style = `
        {
            display: flex;
            justify-content: center;
            width: 50%;
            padding: 10px 15px;
            margin: 25px 0px 0px 0px;
            border-radius: 5px;
            background: var(--colorBlack);
            color: var(--colorWhite);
            font-weight: 900;
            font-size: 15px;
            text-align: center;
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorGreen);
        }`

    const entrar = cE("button", style)

    if(type == "login"){
        entrar.innerHTML = "Entrar"
    }
    else if(type == "createAccount"){
        entrar.innerHTML = "Criar"
    }
    
    entrar.onclick = check
    return(entrar)
}

async function check(Event){
    const btn = Event.target
    btn.disabled = true
    const inputDivChildren = btn.parentElement.children[0].children
    const numberInputs = inputDivChildren.length
    btn.innerHTML = "<img style='height: 20px; width: 20px; border-radius: 1000px;' src='https://media.tenor.com/tga0EoNOH-8AAAAM/loading-load.gif'>"
    if(numberInputs == 2){
        await checkLogin(inputDivChildren)
        btn.innerHTML = "Entrar"
    }
    else{
        await checkNewAccount(inputDivChildren)
        btn.innerHTML = "Criar"
    }
    btn.disabled = false
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
        await axios.post("https://ace-chimp-merry.ngrok-free.app/iPH/userAcess", {userEmail: userEmail, userPassword: userPassword})
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
        await axios.post("https://ace-chimp-merry.ngrok-free.app/iPH/userCreation", {userName: userName, userEmail: userEmail, userPix: userPix, userPassword: userPassword})
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

async function wrongAnimation(item){
    item.style.animation = "inputWrongValue 1s forwards"
    await new Promise(resolve => setTimeout(resolve, 1000))
    item.style.animation = ""
}

async function goToHome(data){
    axios.defaults.headers.common["userAuth"] = data.userInfo.id
    construct(data)
}