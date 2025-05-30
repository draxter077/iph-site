import label from "./label/main.js"
import line from "./line/main.js"
import point from "./point/main.js"

export default function graph(rents){
    let style = `
        {
            position:relative;
            width:60%;
            height:250px;
            box-shadow:0px 0px 1px 0px var(--colorWhite);
            border-radius:15px;
            margin:0px 0px 0px 40px;
        }
        :responsive{
            width:100%;
            height:150px;
            margin:0px 0px 20px 0px;;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
        }`

    const graph = cE("div", style)
    if(rents.length == 0){
        rents = [
            {date:"00/00/00", value:0},
            {date:"00/00/00", value:0},
            {date:"00/00/00", value:0},
            {date:"00/00/00", value:0},
            {date:"00/00/00", value:0}
        ]
    }
    let highestRent = 0, lowestRent = 1000
    for(let i = 0; i < rents.length; i++){
        let r = rents[i].value
        if(r > highestRent){highestRent = r}
        if(r < lowestRent){lowestRent = r}
    }
    for(let i = 0; i < 5; i++){
        let unit = (highestRent*1.1 - lowestRent*0.9)/4
        let x = "2.5%"
        let y = (7.5 + 20*i).toString() + "%"
        let t = (highestRent*1.1 - unit*i).toString() + "%"
        let y2 = (10 + 20*i).toString() + "%"
        graph.appendChild(label(x,y,t))
        graph.appendChild(line(y2))
    }

    for(let i = 0; i < rents.length; i++){
        let r = rents[i]
        let unitX = 80/(rents.length - 1)
        let x = (10 + unitX*(i)).toString() + "%"
        let y = "92.5%"
        let y2 = (90 - 90*((r.value - lowestRent*0.9)/(highestRent*1.1 - lowestRent*0.9))).toString() + "%"
        graph.appendChild(label(x, y, r.date))
        graph.appendChild(point(x, y2, r.value))
    }
    return(graph)
}