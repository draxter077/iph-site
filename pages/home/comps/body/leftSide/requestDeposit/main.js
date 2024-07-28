export default function requestDeposit(){
    return(`
        <div class="homeBodyLeftSideRequestDepositDiv">
            <div class="homeBodyLeftSideRequestDepositDivSlider">
                <div class="homeBodyLeftSideRequestDepositTitle">
                    Depositar
                </div>
                <div class="homeBodyLeftSideRequestDepositContent">
                    Para depósitos, utilize a chave pix <span style="font-weight: 600">i@ph.net.br</span>
                </div>
            </div>
        </div>    
    `)
}

export function slideRequestDeposit(){
    const nowValue = document.getElementsByClassName("homeBodyLeftSideRequestDepositDivSlider")[0].style.translate
    if(nowValue == "-50%"){
        document.getElementsByClassName("homeBodyLeftSideRequestDepositDivSlider")[0].style.translate = "0%"
    }
    else{
        document.getElementsByClassName("homeBodyLeftSideRequestDepositDivSlider")[0].style.translate = "-50%"
    }
}