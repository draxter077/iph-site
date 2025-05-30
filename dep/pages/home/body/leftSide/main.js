import accountTotal from "./accountTotal/main.js"
import requestDeposit from "./requestDeposit/main.js"
import requestWithdraw from "./requestWithdraw/main.js"
import openConfig from "./openConfig/main.js"

export default function homeBodyLeftSideDiv(data){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 30%;
            padding: 10px;
        }
        :responsive{
            width: 100%;
        }`
    const leftSide = cE("div", style)
    leftSide.appendChild(accountTotal(data))
    leftSide.appendChild(requestWithdraw())
    leftSide.appendChild(requestDeposit())
    leftSide.appendChild(openConfig())
    return(leftSide)
}