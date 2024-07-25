import initMain from "./init/main.js"
import { initPageAddFunctionsToButtons } from "./init/main.js"

export default async function constructMain(us){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(us == null){
        root.innerHTML = initMain()
        initPageAddFunctionsToButtons()
    }
    else{
        let a = 100;
        await axios.get("https://ace-chimp-merry.ngrok-free.app/test", {headers: {"ngrok-skip-browser-warning": "69420"}})
            .then(resposta => {a = resposta.data; console.log(a)})
            .catch(response => {console.log(response.response)})
        root.innerHTML = `<button>${a.teste}</button>`
    }
}