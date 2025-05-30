import value from "./value/main.js"
import graph from "./graph/main.js"

export default function capital(movs){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
            padding:0px 40px;   
            margin:0px 0px 20px 0px;
            opacity:0;
            animation:opacity 1s linear 0.5s 1 forwards;
        }
        :responsive{
            flex-direction:column;
            padding:0px 10px;
            margin:20px 0px 0px 0px;
        }`
    
    const capital = cE("div", style)

    let rents = [] //{date, value}
    let cap = 0
    for(let i = 0; i < movs.length; i++){
        let m = movs[i]
        if(m.type == "Lucro"){
            let r = Math.floor((m.value/cap)*100*100)/100
            rents.push({date:m.date.split("/")[1],value:r})
        }
        if(m.status == 1){cap += m.value}
    }

    capital.appendChild(value(cap, rents))
    capital.appendChild(graph(rents))
    console.log(rents)
    return(capital)
}