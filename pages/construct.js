import init from "./init/main.js"
import home from "./home/main.js"

export default async function construct(data){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(data == null){
        root.appendChild(init())
    }
    else{
        root.appendChild(home(data))
    }
}