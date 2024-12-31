import title from "./title/main.js"
import content from "./content/main.js"

export default function capitalAllocation(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: var(--colorWhite);
            padding: 20px 25px;
            border-radius: 20px;
        }
        :responsive{
            flex-direction: column;
        }`
    const capitalAllocation = cE("div", style)
    capitalAllocation.appendChild(title())
    capitalAllocation.appendChild(content())
    return(capitalAllocation)
}