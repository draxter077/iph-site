import initMain from "./init/main.js"

export default async function constructMain(data){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(data == null){
        initMain()
    }
    else{
        root.innerHTML = `<button>${data.data}</button>`
    }
}