import bodyDiv from "./comps/body/main.js"
import topDiv from "./comps/top/main.js"

function homePageAddFunctionsToButtons(){
    document.getElementsByClassName("homeBodyLeftSideRequestDepositDiv")[0].onclick = function a(){
        const nowValue = document.getElementsByClassName("homeBodyLeftSideRequestDepositDivSlider")[0].style.translate
        if(nowValue == "-50%"){
            document.getElementsByClassName("homeBodyLeftSideRequestDepositDivSlider")[0].style.translate = "0%"
        }
        else{
            document.getElementsByClassName("homeBodyLeftSideRequestDepositDivSlider")[0].style.translate = "-50%"
        }
    }
    document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDiv")[0].onclick = async function a(){
        const nowValue = document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate
        if(nowValue == "-50%"){
            document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate = "0%"
        }
        else{
            document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate = "-50%"
            await new Promise(resolve => setTimeout(resolve, 600));
            document.getElementsByClassName("homeBodyLeftSideRequestWithdrawInput")[0].focus()
        }
    }
    document.getElementsByClassName("homeBodyLeftSideRequestWithdrawButton")[0].onclick = async function a(Event){
        Event.stopPropagation();
        document.getElementsByClassName("homeBodyLeftSideRequestWithdrawInput")[0].value = "Aprovado"
        await new Promise(resolve => setTimeout(resolve, 3000));
        document.getElementsByClassName("homeBodyLeftSideRequestWithdrawInput")[0].value = ""
        if(document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate == "-50%"){
            document.getElementsByClassName("homeBodyLeftSideRequestWithdrawDivSlider")[0].style.translate = "0%"
        }
    }
    document.getElementsByClassName("homeBodyLeftSideOpenConfigDiv")[0].onclick = function a(){
        document.getElementsByClassName("homeBodyConfigDiv")[0].style.left = "0%";
        document.getElementsByClassName("homeBodyContent")[0].style.opacity = "0.5";
    }
    document.getElementsByClassName("homeBodyConfigExitButton")[0].onclick = function a(){
        document.getElementsByClassName("homeBodyConfigDiv")[0].style.left = "-100%";
        document.getElementsByClassName("homeBodyContent")[0].style.opacity = "1";
    }

    document.getElementsByClassName("homeBodyConfigChangeEmailDiv")[0].onclick = async function a(){
        const nowValue = document.getElementsByClassName("homeBodyConfigChangeEmailSlider")[0].style.translate
        if(nowValue == "-50%"){
            document.getElementsByClassName("homeBodyConfigChangeEmailSlider")[0].style.translate = "0%"
        }
        else{
            document.getElementsByClassName("homeBodyConfigChangeEmailSlider")[0].style.translate = "-50%"
            await new Promise(resolve => setTimeout(resolve, 600));
            document.getElementsByClassName("homeBodyConfigChangeEmailInput")[0].focus()
        }
    }
    document.getElementsByClassName("homeBodyConfigChangeEmailButton")[0].onclick = async function a(Event){
        Event.stopPropagation();
        document.getElementsByClassName("homeBodyConfigChangeEmailInput")[0].value = "Aprovado"
        await new Promise(resolve => setTimeout(resolve, 3000));
        document.getElementsByClassName("homeBodyConfigChangeEmailInput")[0].value = ""
        if(document.getElementsByClassName("homeBodyConfigChangeEmailSlider")[0].style.translate == "-50%"){
            document.getElementsByClassName("homeBodyConfigChangeEmailSlider")[0].style.translate = "0%"
        }
    }

    document.getElementsByClassName("homeBodyConfigChangePixDiv")[0].onclick = async function a(){
        const nowValue = document.getElementsByClassName("homeBodyConfigChangePixSlider")[0].style.translate
        if(nowValue == "-50%"){
            document.getElementsByClassName("homeBodyConfigChangePixSlider")[0].style.translate = "0%"
        }
        else{
            document.getElementsByClassName("homeBodyConfigChangePixSlider")[0].style.translate = "-50%"
            await new Promise(resolve => setTimeout(resolve, 600));
            document.getElementsByClassName("homeBodyConfigChangePixInput")[0].focus()
        }
    }
    document.getElementsByClassName("homeBodyConfigChangePixButton")[0].onclick = async function a(Event){
        Event.stopPropagation();
        document.getElementsByClassName("homeBodyConfigChangePixInput")[0].value = "Aprovado"
        await new Promise(resolve => setTimeout(resolve, 3000));
        document.getElementsByClassName("homeBodyConfigChangePixInput")[0].value = ""
        if(document.getElementsByClassName("homeBodyConfigChangePixSlider")[0].style.translate == "-50%"){
            document.getElementsByClassName("homeBodyConfigChangePixSlider")[0].style.translate = "0%"
        }
    }

    document.getElementsByClassName("homeBodyConfigChangePasswordDiv")[0].onclick = async function a(){
        const nowValue = document.getElementsByClassName("homeBodyConfigChangePasswordSlider")[0].style.translate
        if(nowValue == "-50%"){
            document.getElementsByClassName("homeBodyConfigChangePasswordSlider")[0].style.translate = "0%"
        }
        else{
            document.getElementsByClassName("homeBodyConfigChangePasswordSlider")[0].style.translate = "-50%"
            await new Promise(resolve => setTimeout(resolve, 600));
            document.getElementsByClassName("homeBodyConfigChangePasswordInput")[0].focus()
        }
    }
    document.getElementsByClassName("homeBodyConfigChangePasswordButton")[0].onclick = async function a(Event){
        Event.stopPropagation();
        document.getElementsByClassName("homeBodyConfigChangePasswordInput")[0].value = "Aprovado"
        await new Promise(resolve => setTimeout(resolve, 3000));
        document.getElementsByClassName("homeBodyConfigChangePasswordInput")[0].value = ""
        if(document.getElementsByClassName("homeBodyConfigChangePasswordSlider")[0].style.translate == "-50%"){
            document.getElementsByClassName("homeBodyConfigChangePasswordSlider")[0].style.translate = "0%"
        }
    }
}

export default function homeMain(data){
    const root = document.getElementById("root")
    root.innerHTML = topDiv() + bodyDiv(data)
    homePageAddFunctionsToButtons()
}