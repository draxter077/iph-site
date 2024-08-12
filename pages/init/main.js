import body from "./comps/body/main.js"

export default function initMain(){
    const root = document.getElementById("root")
    root.appendChild(body())
}