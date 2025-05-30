import input from "../input/main.js"

export default function signUpInputs(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            height:fit-content;
            max-height:0%;
            overflow:hidden;
            transition:max-height 0.5s;
        }`

    const signUpInputs = cE("div", style)
    signUpInputs.id = "signUpInputs"
    signUpInputs.appendChild(input("nome"))
    signUpInputs.appendChild(input("chave pix"))
    return(signUpInputs)
}