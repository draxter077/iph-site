async function slide(n){
    const nowValue = document.getElementsByClassName("homeBodyConfigChange")[n].children[0].style.translate
    if(nowValue == "-50%"){
        document.getElementsByClassName("homeBodyConfigChange")[n].children[0].style.translate = "0%"
        document.getElementsByClassName("homeBodyConfigForms")[n].children[0].blur()
    }
    else{
        document.getElementsByClassName("homeBodyConfigChange")[n].children[0].style.translate = "-50%"
        await new Promise(resolve => setTimeout(resolve, 600));
        document.getElementsByClassName("homeBodyConfigChangeForms")[n].children[0].focus()
    }
}

async function change(Event, type, n){
    Event.stopPropagation();
    Event.target.disabled = true
    const inputDiv = document.getElementsByClassName("homeBodyConfigChangeForms")[n].children[0];
    if(inputDiv.value.length == 0 || (type == "email" && inputDiv.value.replaceAll("@", "") == inputDiv.value)){
        inputDiv.style.animation = "inputWrongValue 1s forwards"
        await new Promise(resolve => setTimeout(resolve, 1000))
        inputDiv.style.animation = ""
        inputDiv.focus()
    }
    else{
        await axios.post("https://ace-chimp-merry.ngrok-free.app/change" + type, {value: inputDiv.value})
            .then(async resposta => {
                inputDiv.value = "Aprovado"
                await new Promise(resolve => setTimeout(resolve, 3000));
                inputDiv.value = ""
                if(document.getElementsByClassName("homeBodyConfigChange")[n].children[0].style.translate == "-50%"){
                    document.getElementsByClassName("homeBodyConfigChange")[n].children[0].style.translate = "0%"
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

function protect(s){
    let ns = ""
    for(let i = 0; i < s.length; i++){
        if(i != s.length - 1 && i != 0){
            ns += "*"
        }
        else{
            ns += s[i]
        }
    }
    return(ns)
}

export default function toChange(data){
    const toChange = document.createElement("div")

    const tosChange = [{type: "email", current: data.email, title: "Alterar email", input: "Novo email"},
        {type: "pix", current: data.pix, title: "Alterar pix", input: "Novo pix"},
        {type: "password", current: protect(data.password), title: "Alterar senha", input: "Nova senha"}
        ]
    
    for(let i = 0; i < tosChange.length; i++){
        let configChange = document.createElement("div")
        configChange.className = "homeBodyConfigChange"
        
        let slider = document.createElement("div")
        slider.onclick = function a(){slide(i)}

        let title = document.createElement("div")
        title.className = "homeBodyConfigChangeTitle"
        title.innerHTML = tosChange[i].title
        slider.appendChild(title)

        let formsInfo = document.createElement("div")
        formsInfo.className = "homeBodyConfigChangeFormsInfo"
            let forms = document.createElement("div")
            forms.className = "homeBodyConfigChangeForms"
                let input = document.createElement("input")
                input.placeholder = tosChange[i].input
                forms.appendChild(input)
                let button = document.createElement("button")
                button.innerHTML = "Alterar"
                button.onclick = function b(Event){change(Event, tosChange[i].type, i)}
                forms.appendChild(button)
            formsInfo.appendChild(forms)
            let info = document.createElement("div")
            info.className = "homeBodyConfigChangeInfo"
            info.innerHTML = "Atual: " + tosChange[i].current
            formsInfo.appendChild(info)
        slider.appendChild(formsInfo)
        

        configChange.appendChild(slider)
        toChange.appendChild(configChange)
    }

    return(toChange)
}