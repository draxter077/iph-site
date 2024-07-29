export default function requestWithdraw(){
    return(`
        <div class="homeBodyLeftSideRequestWithdrawDiv">
            <div class="homeBodyLeftSideRequestWithdrawDivSlider">
                <div class="homeBodyLeftSideRequestWithdrawTitle">
                    Retirar
                </div>
                <div class="homeBodyLeftSideRequestWithdrawContent">
                    <input class="homeBodyLeftSideRequestWithdrawInput" type="number" placeholder="1234,56">
                    <button class="homeBodyLeftSideRequestWithdrawButton">Retirar</button>
                </div>
            </div>
        </div>     
    `)
}

export async function slideRequestWithdraw(){
    const nowValue = document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate
    if(nowValue == "-50%"){
        document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate = "0%"
        document.getElementsByClassName(thing + "Input")[0].blur()
    }
    else{
        document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate = "-50%"
        await new Promise(resolve => setTimeout(resolve, 600));
        document.getElementsByClassName("homeBodyLeftSideRequestWithdrawInput")[0].focus()
    }
}

export async function sendWithdrawRequest(Event){
    Event.stopPropagation();
    const inputDiv = document.getElementsByClassName("homeBodyLeftSideRequestWithdrawInput")[0];
    const nowCapital = Number(document.getElementsByClassName("homeBodyLeftSideAccountTotalContent")[0].innerHTML.replaceAll("R$ ", "").replaceAll(".", "").replaceAll(",", "."))
    if(Number(inputDiv.value.replaceAll("," ,".")) <= 0 || Number(inputDiv.value.replaceAll("," ,".")) > nowCapital || inputDiv.value.length == 0){
        inputDiv.style.animation = "inputWrongValue 1s forwards"
        await new Promise(resolve => setTimeout(resolve, 1000))
        inputDiv.style.animation = ""
        inputDiv.focus()
    }
    else{
        await axios.post("https://ace-chimp-merry.ngrok-free.app/requestWithdraw", {value: Number(inputDiv.value.toString().replaceAll(",", "."))})
            .then(async resposta => {
                inputDiv.value = "Aprovado"
                await new Promise(resolve => setTimeout(resolve, 3000));
                inputDiv.value = ""
                if(document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate == "-50%"){
                    document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate = "0%"
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