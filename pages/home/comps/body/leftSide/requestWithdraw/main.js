export default function requestWithdraw(){
    return(`
        <div class="homeBodyLeftSideRequestWithdraw">
            <div>
                <div class="homeBodyLeftSideRequestWithdrawTitle">
                    Retirar
                </div>
                <div class="homeBodyLeftSideRequestWithdrawContent">
                    <input type="number" placeholder="1234,56">
                    <button>Retirar</button>
                </div>
            </div>
        </div>     
    `)
}

export async function slideRequestWithdraw(){
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

export async function sendWithdrawRequest(Event){
    Event.stopPropagation();
    Event.target.disabled = true
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
    Event.target.disabled = false
}