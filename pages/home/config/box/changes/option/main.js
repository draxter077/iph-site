import title from "./title/main.js"
import value from "./value/main.js"

export default function option(t, v){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:30%;
            padding:10px 15px;
            margin:5px 0px;
            border-radius:15px;
            background:var(--colorWhite);
        }
        :responsive{
            width:100%;
        }`

    const option = cE("div", style)
    option.appendChild(title(t))
    if(t == "senha"){t = "password"}
    if(t == "chave Pix"){t = "pix"}
    option.appendChild(value(v,t))
    return(option)
}