import box from "./box/main.js"

export default function info(){
    let style = `
        {
            display:flex;
            justify-content:center;
            width:100%;
            max-height:0px;
            overflow:hidden;
            transition:max-height 0.5s;
        }`

    const info = cE("div", style)
    info.id = "informações"
    info.appendChild(box())
    return(info)
}