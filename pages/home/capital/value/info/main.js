import capital from "./capital/main.js"
import rent from "./rent/main.js"

export default function info(cap, rents){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:flex-end;
            width:100%;
            padding:0px 10px;
            margin:0px 0px 10px 0px;
            border-bottom:1px solid var(--colorGreen);
        }
        :responsive{
            width:100%;
        }`

    const info = cE("div", style)
    info.appendChild(capital(cap))
    info.appendChild(rent(rents))
    return(info)
}