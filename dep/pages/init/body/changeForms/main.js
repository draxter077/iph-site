import btn from "./btn/main.js"

export default function changeForms(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
        }`
    const changeForms = cE("div", style)
    changeForms.appendChild(btn())
    return(changeForms)
}