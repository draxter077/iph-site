import option from "./option/main.js"

export default function content(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: fit-content;
        }
        :responsive{
            flex-direction: column;
            width: 100%;
        }`

    const content = cE("div", style)
    let childs = ["Minicontratos: 17%", "Ações: 18%", "Ativos estrangeiros: 15%", "CDI: 50%"]
    for(let i = 0; i < childs.length; i++){
        content.appendChild(option(childs[i]))
    }
    return(content)
}