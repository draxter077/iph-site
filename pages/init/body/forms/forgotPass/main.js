import btn from "./btn/main.js"

export default function forgotPass(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            width: 100%;
        }`
    const forgotPass = cE("div", style)
    forgotPass.append(btn())

    return(forgotPass)
}