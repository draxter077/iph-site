export default function configDiv(data){
    return(`
        <div class="homeBodyConfigDiv">
            <div class="homeBodyConfigTitle">
                Olá, ${data.name.split(" ")[0]}
                <button class="homeBodyConfigExitButton">Fechar</button>
            </div>
            <div class="homeBodyConfigUserInfo">
                <div id="userSince">Usuário desde ${data.creation}</div>
                <div id="userName">${data.name}</div>
                <div id="userEmail">${data.email}</div>
                <div id="userPix">${data.pix}</div>
            </div>
            <div class="homeBodyConfigChangeEmailDiv">
                <div class="homeBodyConfigChangeEmailSlider">
                    <div class="homeBodyConfigChangeEmailTitle">
                        Alterar email
                    </div>
                    <div class="homeBodyConfigChangeEmailContent">
                        <input placeholder="Novo email" class="homeBodyConfigChangeEmailInput">
                        <button class="homeBodyConfigChangeEmailButton">Alterar</button>
                    </div>
                </div>
            </div>
            <div class="homeBodyConfigChangePixDiv">
                <div class="homeBodyConfigChangePixSlider">
                    <div class="homeBodyConfigChangePixTitle">
                        Alterar chave Pix
                    </div>
                    <div class="homeBodyConfigChangePixContent">
                        <input placeholder="Nova chave" class="homeBodyConfigChangePixInput">
                        <button class="homeBodyConfigChangePixButton">Alterar</button>
                    </div>
                </div>
            </div>
            <div>
                <div class="homeBodyConfigChangePasswordDiv">
                    <div class="homeBodyConfigChangePasswordSlider">
                        <div class="homeBodyConfigChangePasswordTitle">
                            Alterar senha
                        </div>
                        <div class="homeBodyConfigChangePasswordContent">
                            <input placeholder="Nova senha" class="homeBodyConfigChangePasswordInput">
                            <button class="homeBodyConfigChangePasswordButton">Alterar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="homeBodyConfigDisclaimer">
                Este site não salva dados no seu navegador, de tal forma que
                você será automaticamente deslogado assim que fechar a aba.
            </div>
        </div>    
    `)
}

export function closeConfigDiv(){
    document.getElementsByClassName("homeBodyConfigDiv")[0].style.left = "-100%";
    document.getElementsByClassName("homeBodyContent")[0].style.opacity = "1";
}

export async function slideSomething(thing){
    const div = thing
    const nowValue = document.getElementsByClassName(thing + "Slider")[0].style.translate
    if(nowValue == "-50%"){
        document.getElementsByClassName(thing + "Slider")[0].style.translate = "0%"
        document.getElementsByClassName(thing + "Input")[0].blur()
    }
    else{
        document.getElementsByClassName(thing + "Slider")[0].style.translate = "-50%"
        await new Promise(resolve => setTimeout(resolve, 600));
        document.getElementsByClassName(thing + "Input")[0].focus()
    }
}

export async function changeSomething(Event, type, thing){
    Event.stopPropagation();
    const inputDiv = document.getElementsByClassName(thing + "Input")[0];
    if(inputDiv.value.length == 0 || (type == "Email" && inputDiv.value.replaceAll("@", "") == inputDiv.value)){
        inputDiv.style.animation = "inputWrongValue 1s forwards"
        await new Promise(resolve => setTimeout(resolve, 1000))
        inputDiv.style.animation = ""
        inputDiv.focus()
    }
    else{
        await axios.post("https://ace-chimp-merry.ngrok-free.app/change" + type, {value: Number(inputDiv.value.toString().replaceAll(",", "."))})
            .then(async resposta => {
                if(type != "Password"){
                    document.getElementById("user" + type).innerHTML = inputDiv.value
                }
                inputDiv.value = "Aprovado"
                await new Promise(resolve => setTimeout(resolve, 3000));
                inputDiv.value = ""
                if(document.getElementsByClassName(thing + "Slider")[0].style.translate == "-50%"){
                    document.getElementsByClassName(thing + "Slider")[0].style.translate = "0%"
                }
            })
            .catch(async response => {
                inputDiv.style.animation = "inputWrongValue 1s forwards"
                await new Promise(resolve => setTimeout(resolve, 1000))
                inputDiv.style.animation = ""
                inputDiv.focus()
            })
    }
}