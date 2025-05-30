import info from "./info/main.js"
import buttons from "./buttons/main.js"

export default function value(cap, rents){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:40%;
        }
        :responsive{
            width:100%;
            margin:0px 0px 30px 0px;
        }`

    const value = cE("div", style)
    value.appendChild(info(cap, rents))
    value.appendChild(buttons())
    return(value)
}