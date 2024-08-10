import configDiv from "./config/main.js"
import homeBodyLeftSideDiv from "./leftSide/main.js"
import homeBodyRightSideDiv from "./rightSide/main.js"

export default function bodyDiv(data){
    return(`
        ${configDiv(data.userInfo)}
        <div class="homeBody">
            ${homeBodyLeftSideDiv(data.userInfo)}
            ${homeBodyRightSideDiv(data)}
        </div>
    `)
}