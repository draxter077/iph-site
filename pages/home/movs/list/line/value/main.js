export default function value(v){
    let style = `
        {
            color:${v < 0 ? "var(--colorRed)" : "var(--colorGreen)"};
        }`

    const value = cE("div", style)
    value.innerHTML = stringifyNumber(v)
    return(value)
}