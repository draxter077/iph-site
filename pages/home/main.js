import bodyDiv from "./comps/body/main.js"
import topDiv from "./comps/top/main.js"

function homePageAddFunctionsToButtons(){
    document.getElementsByClassName("homeBodyContentSlider")[0].style.transition = "translate var(--transitionTime)"
    document.getElementsByClassName("homeBodyLeftSideOpenConfigDiv")[0].onclick = function a(){
        const nowValue = document.getElementsByClassName("homeBodyContentSlider")[0].style.translate
        if(nowValue == "0%"){
            if(screen.width > 1000){
                document.getElementsByClassName("homeBodyContentSlider")[0].style.translate = "-23%"
            }
            else{
                document.getElementsByClassName("homeBodyContentSlider")[0].style.translate = "-44%"
            }
        }
        else{
            document.getElementsByClassName("homeBodyContentSlider")[0].style.translate = "0%"
        }
    }
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
    document.getElementsByClassName("test")[0].onclick = function a(Event){
        console.log('a');
        Event.stopPropagation();
    }
}

export default function homeMain(data){
    const root = document.getElementById("root")
    root.innerHTML = topDiv() + bodyDiv(data)
    homePageAddFunctionsToButtons()
}