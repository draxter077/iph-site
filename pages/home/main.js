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
    document.getElementsByClassName("homeBodyLeftSideRequestWithdrawButton")[0].onclick = function a(Event){
        console.log('a');
        Event.stopPropagation();
    }
}

export default function homeMain(data){
    const root = document.getElementById("root")
    root.innerHTML = topDiv() + bodyDiv(data)
    homePageAddFunctionsToButtons()
}