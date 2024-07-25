import initMain from "./init/main.js"
import { initPageAddFunctionsToButtons } from "./init/main.js"
import axios from "../node_modules/axios"

export default function constructMain(us){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(us == null){
        root.innerHTML = initMain()
        initPageAddFunctionsToButtons()
    }
    else{
        let a = 100;
        axios.get("http://ace-chimp-merry.ngrok-free.app/test")
            .then(resposta => {a = resposta.data.teste})
            .catch(response => {console.log(response.response)})
        root.innerHTML = `<button>${a}</button>`
    }
}