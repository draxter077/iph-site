import bodyDiv from "./comps/body/main.js"
import { aboutUs, changeToCreateORLogin, checkCredentialsAndGoToHome, forgotPassword } from "./comps/body/main.js"

function initPageAddFunctionsToButtons(){
    document.getElementsByClassName("initBodyChangeForms")[0].children[0].onclick = function a(Event){changeToCreateORLogin(Event)}
    document.getElementsByClassName("initBodyForms")[0].children[2].onclick = function a(Event){checkCredentialsAndGoToHome(Event)}
    document.getElementsByClassName("initBodyFormsForgotPass")[0].children[0].onclick = function a(Event){forgotPassword(Event)}
    document.getElementsByClassName("initBodyLogo")[0].onclick = function a(){aboutUs()}
}

export default function initMain(){
    const root = document.getElementById("root")
    root.innerHTML = bodyDiv()
    initPageAddFunctionsToButtons()
}