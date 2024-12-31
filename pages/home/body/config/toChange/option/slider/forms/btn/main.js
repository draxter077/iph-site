export default function btn(t){
    let style = `
        {
            background: rgb(0, 0, 0);
            padding: 10px 15px;
            border-radius: 0px 10px 10px 0px;
            color: rgb(255, 255, 255);
            transition: background var(--transitionTime);
            cursor: pointer;
        }
        :hover{
            background: var(--colorGreen);
        }`
    const btn = cE("div", style)
    btn.innerHTML = "Alterar"
    btn.onclick = function b(Event){change(Event, t)}
    return(btn)
}

async function change(Event, type){
    Event.target.disabled = true
    const inputDiv = Event.target.parentElement.children[0];
    if(inputDiv.value.length == 0 || (type == "email" && inputDiv.value.replaceAll("@", "") == inputDiv.value)){
        inputDiv.style.animation = "inputWrongValue 1s forwards"
        await new Promise(resolve => setTimeout(resolve, 1000))
        inputDiv.style.animation = ""
    }
    else{
        await axios.post("https://ace-chimp-merry.ngrok-free.app/iPH/change" + type, {value: inputDiv.value})
            .then(async resposta => {
                inputDiv.value = "Aprovado"
                await new Promise(resolve => setTimeout(resolve, 3000));
                inputDiv.value = ""
                Event.target.parentElement.parentElement.parentElement.children[0].style.translate = "0%"
            })
            .catch(async response => {
                inputDiv.style.animation = "inputWrongValue 1s forwards"
                await new Promise(resolve => setTimeout(resolve, 1000))
                inputDiv.style.animation = ""
            })
    }
    Event.target.disabled = false
}