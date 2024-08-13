import accountTotal from "./accountTotal/main.js"
import requestDeposit from "./requestDeposit/main.js"
import requestWithdraw from "./requestWithdraw/main.js"
import openConfig from "./openConfig/main.js"

export default function homeBodyLeftSideDiv(data){
    const leftSide = document.createElement("div")
    leftSide.className = "homeBodyLeftSide"
    leftSide.appendChild(accountTotal(data))
    leftSide.appendChild(requestWithdraw())
    leftSide.appendChild(requestDeposit())
    leftSide.appendChild(openConfig())
    return(leftSide)
}