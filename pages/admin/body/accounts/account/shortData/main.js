export default function shortData(v){
    let style = `
        {
            width:50px;
            overflow:hidden;
            margin:0px 10px 0px 0px;
        }`

    const shortData = cE("div", style)
    shortData.innerHTML = v
    return(shortData)
}