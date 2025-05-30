export default function value(v){
    let style = `
        {
            font-size:calc(0.6*var(--titleFontSize));
            font-weight:600;
        }`

    const value = cE("div", style)
    value.innerHTML = v
    return(value)
}