import capital from "./capital/main.js"
import rent from "./rent/main.js"

export default function content(data){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            font-size: 25px;
        }`
    const content = cE("div", style)
    content.appendChild(capital(data.capital))
    content.appendChild(rent(data.averageRent))
    return(content)
}