import configDiv from "./config/main.js"
import homeBodyLeftSideDiv from "./leftSide/main.js"
import homeBodyRightSideDiv from "./rightSide/main.js"

export default function bodyDiv(data){
    return(`
        ${configDiv}
        <div class="homeBodyContent">
            ${homeBodyLeftSideDiv()}
            ${homeBodyRightSideDiv()}
        </div>
    `)
}