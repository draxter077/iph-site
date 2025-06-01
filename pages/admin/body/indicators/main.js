import indicator from "./indicator/main.js"

export default function indicators(cap, n, rents){
    let style = `
        {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            width:100%;
            color:var(--colorWhite);
            margin:20px 0px 0px 0px;
        }`

    const indicators = cE("div", style)
    indicators.appendChild(indicator("Total", stringifyNumber(cap)))
    indicators.appendChild(indicator("Clientes", n))

    let rentsSum = 0
    let rentsNs = 0
    for(let i = 0; i < rents.length; i++){
        let rs = rents[i].rents
        rentsNs += rs.length
        for(let j = 0; j < rs.length; j++){
            rentsSum += rs[j]
        }
    }
    indicators.appendChild(indicator("Retorno médio", `${Math.round((rentsSum/rentsNs)*100)/100}%m`))
    return(indicators)
}