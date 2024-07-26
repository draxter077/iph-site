import accountTotal from "./accountTotal/main.js"
import requestDeposit from "./requestDeposit/main.js"
import requestWithdraw from "./requestWithdraw/main.js"
import openConfig from "./openConfig/main.js"

export default function homeBodyLeftSideDiv(){
    return(`
        <div class="homeBodyLeftSideDiv">
            ${accountTotal()}
            ${requestWithdraw()}
            ${requestDeposit()}
            ${openConfig()}
        </div>    
    `)
}