import option from "./option/main.js"

export default function changes(email, pix){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:100%;
            margin:10px 0px 0px 0px;
        }
        :responsive{
            flex-direction:column;
        }`

    const changes = cE("div", style)
    changes.appendChild(option("email", email))
    changes.appendChild(option("senha", ""))
    changes.appendChild(option("chave Pix", pix))
    return(changes)
}