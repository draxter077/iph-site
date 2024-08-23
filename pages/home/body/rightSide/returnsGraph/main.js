export default function returnsGraph(data){
    let highest = 0, lowest = 0
    const rents = [data.rent11, 
                    data.rent10, 
                    data.rent9, 
                    data.rent8, 
                    data.rent7, 
                    data.rent6, 
                    data.rent5, 
                    data.rent4, 
                    data.rent3, 
                    data.rent2, 
                    data.rent1, 
                    Math.floor((data.transresults/data.monthcapital)*10000)/100
                ]
    for(let i = 0; i < rents.length; i++){
        if(rents[i] > highest){
            highest = rents[i]
        }
        if(rents[i] < lowest){
            lowest = rents[i]
        }
    }
    if(highest - lowest < 20){
        highest += 10
        lowest += -10
    }
    const zeroLineY = Math.floor(((0 - lowest)/(highest - lowest))*10000)/100
    let values = []
    for(let j = 0; j < rents.length; j++){
        let a = Math.floor(((rents[j] - lowest)/(highest - lowest))*10000)/100
        a = 100 - a
        a = a*0.90 + 5
        values.push({date: rents[j].toString() + "%", y: a.toString() + "%"})
    }

    const returnsGraph = document.createElement("div")
    returnsGraph.className = "homeBodyReturnsGraph"
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            for(let i = 0; i < 5; i++){
                let line = document.createElementNS("http://www.w3.org/2000/svg", "line")
                line.setAttribute("x1", "5%"); line.setAttribute("x2", "95%")
                line.setAttribute("y1", ((95 - 22.5*i) + "%").toString()); line.setAttribute("y2", ((95 - 22.5*i) + "%").toString())
                line.setAttribute("stroke-width", "1"); line.setAttribute("stroke", "rgb(0, 0, 0, 0.2)")
                svg.appendChild(line)
            }
            for(let j = 0; j < 5; j++){
                let text = document.createElementNS("http://www.w3.org/2000/svg", "text")
                text.setAttribute("x", "0%"); text.setAttribute("y", ((7.5 + 22.5*j) + "%").toString())
                text.innerHTML = Math.floor(((highest - lowest)*(1 - (0.25*j)) + lowest)*100)/100 + "%"
                svg.appendChild(text)
            }
            let line = document.createElementNS("http://www.w3.org/2000/svg", "line")
            line.setAttribute("x1", "5%"); line.setAttribute("x2", "95%"); 
            line.setAttribute("y1", (zeroLineY + "%"),toString()); line.setAttribute("y2", (zeroLineY + "%").toString())
            line.setAttribute("stroke-width", "1"); line.setAttribute("stroke", "rgb(255, 0, 200)")
            svg.appendChild(line)

            const g = document.createElementNS("http://www.w3.org/2000/svg", "g")
            for(let k = 0; k < values.length; k++){
                let iK = values[k]
                let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
                circle.setAttribute("r", "0.75%"); circle.setAttribute("cy", (iK.y).toString())
                circle.setAttribute("cx", (5 + k*8.18 + "%").toString())
                    let title = document.createElementNS("http://www.w3.org/2000/svg", "title")
                    title.innerHTML = iK.date
                    circle.appendChild(title)
                g.appendChild(circle)

                if(k > 0){
                    let line = document.createElementNS("http://www.w3.org/2000/svg", "line")
                    line.setAttribute("x1", (5 + (k-1)*8.18 + "%").toString()); line.setAttribute("x2", (5 + k*8.18 + "%").toString())
                    line.setAttribute("y1", (values[k-1].y).toString()); line.setAttribute("y2", (iK.y).toString())
                    line.setAttribute("stroke-width", "1"); line.setAttribute("stroke", "rgb(0, 0, 0)")
                    g.appendChild(line)
                }
            }
            svg.appendChild(g)
        returnsGraph.appendChild(svg)
    return(returnsGraph)
}