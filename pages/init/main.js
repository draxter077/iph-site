import bodyDiv from "./comps/body/main.js"
import changeToCreateORLogin from "./comps/body/btnFunctions/changeForms.js"
import checkCredentialsAndGoToHome from "./comps/body/btnFunctions/sendForms.js"

function initPageAddFunctionsToButtons(){
    document.getElementsByClassName("initBodyFormsCreateAccountButton")[0].onclick = function a(Event){changeToCreateORLogin(Event)}
    document.getElementsByClassName("initBodyFormsButton")[0].onclick = function b(Event){checkCredentialsAndGoToHome(Event)}
}

export default function initMain(){
    const root = document.getElementById("root")
    root.innerHTML = bodyDiv()
    initPageAddFunctionsToButtons()
}