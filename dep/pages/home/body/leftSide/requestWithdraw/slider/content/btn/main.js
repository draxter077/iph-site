export default function btn(){
    let style = `
        {
            background: var(--colorBlack);
            color: var(--colorWhite);
            padding: 10px 15px;
            border-radius: 0px 10px 10px 0px;
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorGreen);
        }`
    const button = cE("button", style)
    button.innerHTML = "Retirar"
    button.onclick = sendWithdrawRequest
    return(button)
}

async function sendWithdrawRequest(Event){
    Event.target.disabled = true
    const inputDiv = Event.target.parentElement.children[0];
    const nowCapital = Number(Event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[0].innerHTML.replaceAll("R$ ", "").replaceAll(".", "").replaceAll(",", "."))
    if(Number(inputDiv.value.replaceAll("," ,".")) <= 0 || Number(inputDiv.value.replaceAll("," ,".")) > nowCapital || inputDiv.value.length == 0){
        inputDiv.style.animation = "inputWrongValue 1s forwards"
        await new Promise(resolve => setTimeout(resolve, 1000))
        inputDiv.style.animation = ""
        inputDiv.focus()
    }
    else{
        const inputValue = Number(inputDiv.value.replaceAll(",", "."))
        await axios.post("https://ace-chimp-merry.ngrok-free.app/iPH/requestWithdraw", {value: inputValue})
            .then(async resposta => {
                inputDiv.style.animation = "inputRightValue 1s forwards"
                inputDiv.type = "text"
                inputDiv.value = "Aprovado 📬"
                let acc = Event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[1].children[0]
                let accTotal = Number(acc.innerHTML.replace("R$ ", "").replaceAll(",", "."))
                acc.innerHTML = "R$ " + (Math.floor((accTotal - inputValue)*100)/100).toString().replace(".", ",")
                await new Promise(resolve => setTimeout(resolve, 3000));
                inputDiv.value = ""
                inputDiv.type = "number"
                inputDiv.style.animation = ""
                let slider = Event.target.parentElement.parentElement
                slider.style.translate = "0%"
                inputDiv.blur()
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