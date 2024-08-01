import bodyDiv from "./comps/body/main.js"
import changeToCreateORLogin from "./comps/body/btnFunctions/changeForms.js"
import checkCredentialsAndGoToHome from "./comps/body/btnFunctions/sendForms.js"
import forgotPassword from "./comps/body/btnFunctions/forgotPass.js"
import aboutUs from "./comps/body/btnFunctions/aboutUs.js"

function initPageAddFunctionsToButtons(){
    document.getElementsByClassName("initBodyFormsCreateAccountButton")[0].onclick = function a(Event){changeToCreateORLogin(Event)}
    document.getElementsByClassName("initBodyFormsButton")[0].onclick = function a(Event){checkCredentialsAndGoToHome(Event)}
    document.getElementsByClassName("initBodyFormsForgotPassButton")[0].onclick = function a(Event){forgotPassword(Event)}
    document.getElementsByClassName("initBodyLogo")[0].onclick = function a(){aboutUs()}
}

export default function initMain(){
    const root = document.getElementById("root")
    root.innerHTML = bodyDiv()
    initPageAddFunctionsToButtons()
}