import initMain from "./init/main.js"

export default async function constructMain(us){
    const root = document.getElementById("root")
    root.innerHTML = ""
    if(us == null){
        initMain()
    }
    else{
        root.innerHTML = `<button>${us.userID}</button>`
    }
}