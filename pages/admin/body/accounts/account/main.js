import longData from "./longData/main.js"
import shortData from "./shortData/main.js"

export default function account(data, cap, dRents){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:fit-content;
            font-size:calc(0.5*var(--titleFontSize));
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorWhite);
            padding:5px;
        }`

    const account = cE("div", style)
    account.appendChild(shortData(data.id))
    account.appendChild(longData(data.name))
    account.appendChild(longData(data.email))
    account.appendChild(longData(stringifyNumber(cap)))
    for(let i = 0; i < dRents.length; i++){
        account.appendChild(shortData(`${dRents[i]}%`))
    }
    return(account)
}