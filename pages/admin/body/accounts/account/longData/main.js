export default function longData(v){
    let style = `
        {
            width:150px;
            overflow:hidden;
            text-wrap:nowrap;
            margin:0px 10px 0px 0px;
        }`

    const longData = cE("div", style)
    longData.innerHTML = v
    return(longData)
}