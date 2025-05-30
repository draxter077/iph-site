export default function title(t){
    let style = `
        {
            width:fit-content;
            white-space:nowrap;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}