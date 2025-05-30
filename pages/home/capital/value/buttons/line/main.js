import detail from "./detail/main.js"
import value from "./value/main.js"

export default function line(t){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:row;
            align-items:center;
            width:100%;
            font-size:15px;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorWhite);
            padding:5px;
        }
        >div{width:50%;text-align:center}
        >input{width:50%}
        :responsive{
            font-size:12px;
        }`

    const line = cE("div", style)
    line.appendChild(detail(t.detail))
    line.appendChild(value())
    return(line)
}