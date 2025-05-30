export default function title(t){
    let style = `
        {
            font-size:calc(0.4*var(--titleFontSize));
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}