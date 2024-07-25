import initMain from "./init/main.js"
import { initPageAddFunctionsToButtons } from "./init/main.js"

export default function constructMain(us){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(us == null){
        root.innerHTML = initMain()
        initPageAddFunctionsToButtons()
    }
    else{
        root.innerHTML = "<button>oi</button>"
    }
}