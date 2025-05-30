import date from "./date/main.js"
import detail from "./detail/main.js"
import value from "./value/main.js"
import capital from "./capital/main.js"

export default function line(t, c){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:100%;
            font-size:15px;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorWhite);
            padding:5px;
        }
        >div{
            width:25%;
            text-align:center;
        }
        :responsive{
            font-size:12px;
        }`

    const line = cE("div", style)
    line.appendChild(date(t.date))
    line.appendChild(detail(t.type))
    line.appendChild(value(t.value))
    line.appendChild(capital(c))
    return(line)
}