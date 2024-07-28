import configDiv from "./config/main.js"
import homeBodyLeftSideDiv from "./leftSide/main.js"
import homeBodyRightSideDiv from "./rightSide/main.js"

export default function bodyDiv(data){
    return(`
        ${configDiv(data)}
        <div class="homeBodyContent">
            ${homeBodyLeftSideDiv(data)}
            ${homeBodyRightSideDiv(data)}
        </div>
    `)
}