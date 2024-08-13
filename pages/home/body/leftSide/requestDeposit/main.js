function slide(){
    const nowValue = document.getElementsByClassName("homeBodyLeftSideRequestDeposit")[0].children[0].style.translate
    if(nowValue == "-50%"){
        document.getElementsByClassName("homeBodyLeftSideRequestDeposit")[0].children[0].style.translate = "0%"
    }
    else{
        document.getElementsByClassName("homeBodyLeftSideRequestDeposit")[0].children[0].style.translate = "-50%"
    }
}

export default function requestDeposit(){
    const requestDeposit = document.createElement("div")
    requestDeposit.className = "homeBodyLeftSideRequestDeposit"
        const slider = document.createElement("div")
        slider.onclick = slide
            const title = document.createElement("div")
            title.className = "homeBodyLeftSideRequestDepositTitle"
            title.innerHTML = "Depositar"
            slider.appendChild(title)

            const content = document.createElement("div")
            content.className = "homeBodyLeftSideRequestDepositContent"
            content.innerHTML = `Para depósitos, utilize a chave pix <span style="font-weight: 600">i@ph.net.br</span>`
            slider.appendChild(content)
        requestDeposit.appendChild(slider)
    return(requestDeposit)
}