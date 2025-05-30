import line from "./line/main.js"
import line0 from "../../capital/value/buttons/line/main.js"

export default function list(ms){
    let style = `
        {
            display:flex;
            flex-direction:column;
            overflow-y:scroll;
            width:100%;
            height:100%;
            padding:0px 10px;
            border-bottom:1px solid var(--colorGreen);
        }
        :responsive{
            padding:0px 5px;
        }`

    const list = cE("div", style)
    list.id = "list"
    ms.reverse()
    let cap = 0
    for(let i = 0; i < ms.length; i++){
        if(ms[i].status == 1){cap += ms[i].value}
    }
    for(let i = 0; i < ms.length; i++){
        if(ms[i].status == 0){
            let l = line0({detail:`${ms[i].type} em andamento`})
            l.children[1].type = "text"
            l.children[1].value = stringifyNumber(ms[i].value)
            l.children[1].style.border = "none"
            l.children[1].disabled = true
            list.appendChild(l)
        }
    }
    for(let i = 0; i < ms.length; i++){
        if(ms[i].status == 1){
            list.appendChild(line(ms[i], cap))
            cap -= ms[i].value
        }
    }
    return(list)
}