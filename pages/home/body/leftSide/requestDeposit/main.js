import slider from "./slider/main.js"

export default function requestDeposit(){
    let style = `
        {
            border-radius: 20px;
            margin: 0px 0px 20px 0px;
            width: 100%;
            overflow: hidden;
            cursor: pointer;
        }`
    const requestDeposit = cE("div", style)
    requestDeposit.appendChild(slider())
    return(requestDeposit)
}