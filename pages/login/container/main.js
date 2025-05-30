import input from "./input/main.js"
import signUpInputs from "./signUpInputs/main.js"
import buttons from "./buttons/main.js"

export default function container(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            opacity:0;
            animation:opacity 0.5s linear 1s 1 forwards;
        }`

    const container = cE("div", style)
    container.appendChild(signUpInputs())
    container.appendChild(input("email"))
    container.appendChild(input("senha"))
    container.appendChild(buttons())
    return(container)
}