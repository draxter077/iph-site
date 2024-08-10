import userInfo from "./comps/userInfo/main.js"
import toChange from "./comps/toChange/main.js"

export default function configDiv(data){
    return(`
        <div class="homeBodyConfig">
            <div class="homeBodyConfigTitle">
                Olá, ${data.name.split(" ")[0]}
                <button>Fechar</button>
            </div>
            ${userInfo(data)}
            ${toChange()}
            <div class="homeBodyConfigDisclaimer">
                Este site não salva dados no seu navegador, de tal forma que
                você será automaticamente deslogado assim que fechar a aba.
            </div>
        </div>    
    `)
}

export function closeConfigDiv(){
    document.getElementsByClassName("homeBodyConfig")[0].style.left = "-100%";
    document.getElementsByClassName("homeBody")[0].style.opacity = "1";
}

export async function slideSomething(thingN){
    const nowValue = document.getElementsByClassName("homeBodyConfigChange")[thingN].children[0].style.translate
    if(nowValue == "-50%"){
        document.getElementsByClassName("homeBodyConfigChange")[thingN].children[0].style.translate = "0%"
        document.getElementsByClassName("homeBodyConfigForms")[thingN].children[0].blur()
    }
    else{
        document.getElementsByClassName("homeBodyConfigChange")[thingN].children[0].style.translate = "-50%"
        await new Promise(resolve => setTimeout(resolve, 600));
        document.getElementsByClassName("homeBodyConfigChangeForms")[thingN].children[0].focus()
    }
}

export async function changeSomething(Event, type, thingN){
    Event.stopPropagation();
    Event.target.disabled = true
    const inputDiv = document.getElementsByClassName("homeBodyConfigChangeForms")[thingN];
    if(inputDiv.value.length == 0 || (type == "Email" && inputDiv.value.replaceAll("@", "") == inputDiv.value)){
        inputDiv.style.animation = "inputWrongValue 1s forwards"
        await new Promise(resolve => setTimeout(resolve, 1000))
        inputDiv.style.animation = ""
        inputDiv.focus()
    }
    else{
        await axios.post("https://ace-chimp-merry.ngrok-free.app/change" + type, {value: inputDiv.value})
            .then(async resposta => {
                if(type != "Password"){
                    document.getElementById("user" + type).innerHTML = inputDiv.value
                }
                inputDiv.value = "Aprovado"
                await new Promise(resolve => setTimeout(resolve, 3000));
                inputDiv.value = ""
                if(document.getElementsByClassName("homeBodyConfigChange")[thingN].children[0].style.translate == "-50%"){
                    document.getElementsByClassName("homeBodyConfigChange")[thingN].children[0].style.translate = "0%"
                }
            })
            .catch(async response => {
                inputDiv.style.animation = "inputWrongValue 1s forwards"
                await new Promise(resolve => setTimeout(resolve, 1000))
                inputDiv.style.animation = ""
                inputDiv.focus()
            })
    }
    Event.target.disabled = false
}