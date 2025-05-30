import accounts from "./accounts/main.js"
import indicators from "./indicators/main.js"
import buttons from "./buttons/main.js"
import tasks from "./tasks/main.js"

export default function body(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            max-height:0px;
            overflow:hidden;
            transition:max-height 0.5s;
        }`

    const body = cE("div", style)
    let cap = 0, caps = [], rents = []
    for(let i = 0; i < data.length; i++){
        let d = data[i]
        let ms = d.movs
        let capUser = 0
        let rs = []
        for(let j = 0; j < ms.length; j++){
            let m = ms[j]
            if(m.type == "Lucro"){
                rs.push(Math.floor(Math.round((m.value/capUser)*10000)/100))
            }
            capUser += m.value
        }
        caps.push({id:d.id,capital:capUser})
        cap += capUser
        rents.push({id:d.id, rents:rs})
    }
    body.appendChild(accounts(data, caps, rents))
    body.appendChild(indicators(cap, data.length, rents))
    body.appendChild(buttons())
    body.appendChild(tasks(data))
    return(body)
}