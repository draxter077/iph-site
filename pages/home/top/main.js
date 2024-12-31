import logo from "./logo/main.js"

export default function top(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            margin: 30px 0px 0px 0px;
        }`
    const top = cE("div", style)
    top.appendChild(logo())
    return(top)
}