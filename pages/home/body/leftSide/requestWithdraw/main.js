async function sendWithdrawRequest(Event){
    Event.stopPropagation();
    Event.target.disabled = true
    const inputDiv = document.getElementsByClassName("homeBodyLeftSideRequestWithdrawContent")[0].children[0];
    const nowCapital = Number(document.getElementsByClassName("homeBodyLeftSideAccountTotalContents")[0].children[0].innerHTML.replaceAll("R$ ", "").replaceAll(".", "").replaceAll(",", "."))
    if(Number(inputDiv.value.replaceAll("," ,".")) <= 0 || Number(inputDiv.value.replaceAll("," ,".")) > nowCapital || inputDiv.value.length == 0){
        inputDiv.style.animation = "inputWrongValue 1s forwards"
        await new Promise(resolve => setTimeout(resolve, 1000))
        inputDiv.style.animation = ""
        inputDiv.focus()
    }
    else{
        await axios.post("https://ace-chimp-merry.ngrok-free.app/requestWithdraw", {value: Number(inputDiv.value.toString().replaceAll(",", "."))})
            .then(async resposta => {
                await new Promise(resolve => setTimeout(resolve, 3000));
                if(document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate == "-50%"){
                    document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate = "0%"
                }
            })
            .catch(async response => {
                inputDiv.style.animation = "inputRightValue 1s forwards"
                await new Promise(resolve => setTimeout(resolve, 1000))
                inputDiv.style.animation = ""
                inputDiv.focus()
            })
    }
    Event.target.disabled = false
}

async function slide(){
    const nowValue = document.getElementsByClassName("homeBodyLeftSideRequestWithdraw")[0].children[0].style.translate
    if(nowValue == "-50%"){
        document.getElementsByClassName("homeBodyLeftSideRequestWithdraw")[0].children[0].style.translate = "0%"
        document.getElementsByClassName("homeBodyLeftSideRequestWithdrawContent")[0].children[0].blur()
    }
    else{
        document.getElementsByClassName("homeBodyLeftSideRequestWithdraw")[0].children[0].style.translate = "-50%"
        await new Promise(resolve => setTimeout(resolve, 600));
        document.getElementsByClassName("homeBodyLeftSideRequestWithdrawContent")[0].children[0].focus()
    }
}

export default function requestWithdraw(){
    const requestWithdraw = document.createElement("div")
    requestWithdraw.className = "homeBodyLeftSideRequestWithdraw"
    requestWithdraw.onclick = slide
        const slider = document.createElement("div")
            const title = document.createElement("div")
            title.className = "homeBodyLeftSideRequestWithdrawTitle"
            title.innerHTML = "Retirar"
            slider.appendChild(title)

            const content = document.createElement("div")
            content.className = "homeBodyLeftSideRequestWithdrawContent"
                const input = document.createElement("input")
                input.type = "number"
                input.placeholder = "1234,56"
                content.appendChild(input)

                const button = document.createElement("button")
                button.innerHTML = "Retirar"
                button.onclick = sendWithdrawRequest
                content.appendChild(button)
            slider.appendChild(content)
        requestWithdraw.appendChild(slider)
    return(requestWithdraw)
}