import configDiv from "./config/main.js"
import homeBodyLeftSideDiv from "./leftSide/main.js"
import homeBodyRightSideDiv from "./rightSide/main.js"

export default function bodyDiv(data){
    return(`
        <div class="homeBodyContent">
            <div class="homeBodyContentSlider">
                ${configDiv()}
                <div class="homeBodySides">
                    ${homeBodyLeftSideDiv()}
                    ${homeBodyRightSideDiv()}
                </div>
            </div>
        </div>
    `)
}