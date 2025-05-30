import box from "./box/main.js"

export default function config(name, email, pix){
    let style = `
        {
            display:flex;
            justify-content:center;
            height:fit-content;
            max-height:0px;
            width:100%;
            overflow:hidden;
            transition:max-height 0.5s;
        }`

    const config = cE("div", style)
    config.id = "configurações"
    config.appendChild(box(name, email, pix))
    return(config)
}