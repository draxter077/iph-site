import title from "./title/main.js"
import content from "./content/main.js"

export default function accountTotal(data){
    let style = `
        {
            display: flex;
            flex-direction: column;
            background: rgb(255, 255, 255);
            padding: 20px 25px;
            border-radius: 20px;
            width: 100%;
            margin: 0px 0px 20px 0px;
        }`
    const accountTotal = cE("div", style)
    accountTotal.appendChild(title())
    accountTotal.appendChild(content(data))
    return(accountTotal)
}