import slider from "./slider/main.js"

export default function option(data){
    let style = `
        {
            width: 100%;
            border: 1px solid rgb(0, 0, 0);
            border-radius: 15px;
            overflow: hidden;
            margin: 0px 0px 10px 0px;
            transition: color var(--transitionTime);
        }
        :hover{
            color: var(--colorGreen);
        }`
    const option = cE("div", style)
    option.appendChild(slider(data))
    return(option)
}       