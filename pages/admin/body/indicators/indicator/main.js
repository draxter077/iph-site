import title from "./title/main.js"
import value from "./value/main.js"

export default function indicator(t, v){
    let style = `
        {
            display:flex;
            flex-direction:column;
            padding:5px 10px;
            border-bottom:1px solid var(--colorGreen);
            border-top:1px solid var(--colorGreen);
            margin:10px;
        }`

    const indicator = cE("div", style)
    indicator.appendChild(title(t))
    indicator.appendChild(value(v))
    return(indicator)
}