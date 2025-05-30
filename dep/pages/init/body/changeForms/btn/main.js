import inputs from "../../forms/inputs/main.js"
import forgotPass from "../../forms/forgotPass/main.js"
import enter from "../../forms/enter/main.js"

export default function btn(){
    let style = `
        {
            background: rgb(0, 0, 0);
            margin: 20px 0px 0px 0px;
            color: rgb(255, 255, 255);
            font-weight: 600;
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorGreen);
        }`

    const btn = cE("button", style)
    btn.innerHTML = "Criar uma conta"
    btn.onclick = change
    return(btn)
}

function change(Event){
    const formsDiv = Event.target.parentElement.parentElement.children[1]
    const btn = Event.target
    if(btn.innerHTML == "Criar uma conta"){
        formsDiv.replaceChildren(inputs("createAccount"), enter("createAccount"))
        btn.innerHTML = "Entrar em uma conta"
    }
    else if(btn.innerHTML == "Entrar em uma conta"){
        formsDiv.replaceChildren(inputs("login"), forgotPass(), enter("login"))
        btn.innerHTML = "Criar uma conta"
    }
}