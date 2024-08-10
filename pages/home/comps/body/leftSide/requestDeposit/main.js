export default function requestDeposit(){
    return(`
        <div class="homeBodyLeftSideRequestDeposit">
            <div>
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
    const nowValue = document.getElementsByClassName("homeBodyLeftSideRequestDeposit")[0].children[0].style.translate
    if(nowValue == "-50%"){
        document.getElementsByClassName("homeBodyLeftSideRequestDeposit")[0].children[0].style.translate = "0%"
    }
    else{
        document.getElementsByClassName("homeBodyLeftSideRequestDeposit")[0].children[0].style.translate = "-50%"
    }
}