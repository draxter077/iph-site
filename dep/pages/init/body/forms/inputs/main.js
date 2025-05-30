import input from "./input/main.js"

export default function inputs(type){
    let style = `
        {
            display: flex;
            flex-direction: column;
        }`

    const inputs = cE("div", style)

    if(type == "login"){
        inputs.append(input("Email", undefined))
        inputs.append(input("Senha", "password"))
    }
    else if(type == "createAccount"){
        inputs.append(input("Nome", undefined))
        inputs.append(input("Email", undefined))
        inputs.append(input("Chave Pix", undefined))
        inputs.append(input("Senha", "password"))
        inputs.append(input("Confirmar senha", "password"))
    }

    return(inputs)
}