export default function rent(rents){
    let style = `
        {
            font-size:27px;
            color:var(--colorGreen);
        }
        :responsive{
            font-size:22px;
        }`
    
    const rent = cE("div", style)
    let s = 0;
    for(let i = 0; i < rents.length; i++){s += rents[i].value}
    rent.innerHTML = (Math.floor((s/rents.length)*100)/100).toString() + "%m"
    return(rent)
}