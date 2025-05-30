import btn from "./btn/main.js"

export default function title(data){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 25px;
            font-weight: 600;
            width: 100%;
            margin: 0px 0px 20px 0px;
        }`
    const title = cE("div", style)
    title.innerHTML = "Olá, " + data.name.split(" ")[0]
    title.appendChild(btn())
    return(title)
}