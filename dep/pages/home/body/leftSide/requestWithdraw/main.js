import slider from "./slider/main.js"

export default function requestWithdraw(){
    let style = `
        {
            border-radius: 20px;
            margin: 0px 0px 20px 0px;
            width: 100%;
            overflow: hidden;
            cursor: pointer;
        }`
    const requestWithdraw = cE("div", style)
    requestWithdraw.appendChild(slider())
    return(requestWithdraw)
}