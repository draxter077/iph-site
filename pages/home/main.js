import bodyDiv from "./comps/body/main.js"
import topDiv from "./comps/top/main.js"
import { slideRequestDeposit } from "./comps/body/leftSide/requestDeposit/main.js"
import { slideRequestWithdraw } from "./comps/body/leftSide/requestWithdraw/main.js"
import { sendWithdrawRequest } from "./comps/body/leftSide/requestWithdraw/main.js"
import { openConfigDiv } from "./comps/body/leftSide/openConfig/main.js"
import { changeSomething, closeConfigDiv, slideSomething } from "./comps/body/config/main.js"

function homePageAddFunctionsToButtons(){
    document.getElementsByClassName("homeBodyLeftSideRequestDepositDiv")[0].onclick = function a(){slideRequestDeposit()}
    document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDiv")[0].onclick = async function a(){await slideRequestWithdraw()}
    document.getElementsByClassName("homeBodyLeftSideRequestWithdrawButton")[0].onclick = async function a(Event){await sendWithdrawRequest(Event)}
    document.getElementsByClassName("homeBodyLeftSideOpenConfigDiv")[0].onclick = function a(){openConfigDiv()}
    document.getElementsByClassName("homeBodyConfigExitButton")[0].onclick = function a(){closeConfigDiv()}

    document.getElementsByClassName("homeBodyConfigChangeEmailDiv")[0].onclick = async function a(){await slideSomething("homeBodyConfigChangeEmail")}
    document.getElementsByClassName("homeBodyConfigChangeEmailButton")[0].onclick = async function a(Event){await changeSomething(Event, "email", "homeBodyConfigChangeEmail")}

    document.getElementsByClassName("homeBodyConfigChangePixDiv")[0].onclick = async function a(){await slideSomething("homeBodyConfigChangePix")}
    document.getElementsByClassName("homeBodyConfigChangePixButton")[0].onclick = async function a(Event){await changeSomething(Event, "pix", "homeBodyConfigChangePix")}

    document.getElementsByClassName("homeBodyConfigChangePasswordDiv")[0].onclick = async function a(){await slideSomething("homeBodyConfigChangePassword")}
    document.getElementsByClassName("homeBodyConfigChangePasswordButton")[0].onclick = async function a(Event){await changeSomething(Event, "password", "homeBodyConfigChangePassword")}
}

export default function homeMain(data){
    const root = document.getElementById("root")
    root.innerHTML = topDiv() + bodyDiv(data)
    homePageAddFunctionsToButtons()
}