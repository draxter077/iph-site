import initMain from "./init/main.js"

export default function constructMain(us){
    const root = document.getElementById("root")
    if(us == null){
        root.innerHTML = initMain()
    }
}