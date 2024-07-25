import bodyDiv from "./comps/body/main.js"
import { changeToCreateORLogin, checkCredentialsAndGoToHome } from "./comps/body/main.js"

export function initPageAddFunctionsToButtons(){
    document.getElementsByClassName("initBodyFormsCreateAccountButton")[0].onclick = function a(Event){changeToCreateORLogin(Event)}
    document.getElementsByClassName("initBodyFormsButton")[0].onclick = function b(Event){checkCredentialsAndGoToHome(Event)}
}

export default function initMain(){
    return(bodyDiv())
}