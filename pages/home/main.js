import bodyDiv from "./comps/body/main.js"
import topDiv from "./comps/top/main.js"
import { slideRequestDeposit } from "./comps/body/leftSide/requestDeposit/main.js"
import { slideRequestWithdraw } from "./comps/body/leftSide/requestWithdraw/main.js"
import { sendWithdrawRequest } from "./comps/body/leftSide/requestWithdraw/main.js"
import { openConfigDiv } from "./comps/body/leftSide/openConfig/main.js"
import { changeSomething, closeConfigDiv, slideSomething } from "./comps/body/config/main.js"

function homePageAddFunctionsToButtons(){
    document.getElementsByClassName("homeBodyLeftSideRequestDeposit")[0].onclick = function a(){slideRequestDeposit()}
    document.getElementsByClassName("homeBodyLeftSideRequestWithdraw")[0].onclick = async function a(){await slideRequestWithdraw()}
    document.getElementsByClassName("homeBodyLeftSideRequestWithdrawContent")[0].children[1].onclick = async function a(Event){await sendWithdrawRequest(Event)}
    document.getElementsByClassName("homeBodyLeftSideOpenConfig")[0].onclick = function a(){openConfigDiv()}

    document.getElementsByClassName("homeBodyConfigTitle")[0].children[0].onclick = function a(){closeConfigDiv()}
    document.getElementsByClassName("homeBodyConfigChange")[0].onclick = async function a(){await slideSomething(0)}
    document.getElementsByClassName("homeBodyConfigChangeForms")[0].children[1].onclick = async function a(Event){await changeSomething(Event, "Email", 0)}
    document.getElementsByClassName("homeBodyConfigChange")[1].onclick = async function a(){await slideSomething(1)}
    document.getElementsByClassName("homeBodyConfigChangeForms")[1].children[1].onclick = async function a(Event){await changeSomething(Event, "Pix", 1)}
    document.getElementsByClassName("homeBodyConfigChange")[2].onclick = async function a(){await slideSomething(2)}
    document.getElementsByClassName("homeBodyConfigChangeForms")[2].children[1].onclick = async function a(Event){await changeSomething(Event, "Password", 2)}
}

export default function homeMain(data){
    const root = document.getElementById("root")
    root.innerHTML = topDiv() + bodyDiv(data)
    homePageAddFunctionsToButtons()
}