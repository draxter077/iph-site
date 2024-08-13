export default function inputs(type){
    const inputs = document.createElement("div")
    inputs.className = "initBodyFormsInputs"

    if(type == "login"){
        const inputEmail = document.createElement("input")
        inputEmail.placeholder = "Email"
        inputs.append(inputEmail)

        const inputPassword = document.createElement("input")
        inputPassword.placeholder = "Senha"
        inputPassword.type = "password"
        inputs.append(inputPassword)
    }
    else if(type == "createAccount"){
        const inputName = document.createElement("input")
        inputName.placeholder = "Nome"
        inputs.append(inputName)
    
        const inputEmail = document.createElement("input")
        inputEmail.placeholder = "Email"
        inputs.append(inputEmail)

        const inputPix = document.createElement("input")
        inputPix.placeholder = "Chave pix"
        inputs.append(inputPix)

        const inputPassword = document.createElement("input")
        inputPassword.placeholder = "Senha"
        inputPassword.type = "password"
        inputs.append(inputPassword)

        const inputConfPassword = document.createElement("input")
        inputConfPassword.placeholder = "Confirmar senha"
        inputConfPassword.type = "password"
        inputs.append(inputConfPassword)
    }

    return(inputs)
}