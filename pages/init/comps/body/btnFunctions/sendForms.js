import constructMain from "../../../../construct.js"

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
    axios.defaults.headers.common["userAuth"] = data.id
    await cleanScreen(data)
}

async function checkLogin(inputDivChildren){
    for(let i = 0; i < 2; i++){
        if(inputDivChildren[i].value.length == 0){
            await wrongAnimation(inputDivChildren[i])
            return(false)
        }
    }
    const userEmail = inputDivChildren[0].value, userPassword = inputDivChildren[1].value
    await axios.post("https://ace-chimp-merry.ngrok-free.app/userAcess", {userEmail: userEmail, userPassword: userPassword})
        .then(async resposta => {
            await goToHome(resposta.data.userInfo)
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
    if(userEmail == userEmail.replaceAll("@", "")){
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
                else if(errorStatus == 401){
                    await wrongAnimation(inputDivChildren[1])
                }
            })
    }
}

export default async function checkCredentialsAndGoToHome(Event){
    const btn = Event.target
    const inputDivChildren = btn.parentElement.children[0].children
    const numberInputs = inputDivChildren.length
    if(numberInputs == 2){
        checkLogin(inputDivChildren)
    }
    else{
        checkNewAccount(inputDivChildren)
    }
}