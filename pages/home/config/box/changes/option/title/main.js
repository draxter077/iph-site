export default function title(t){
    let style = `
        {
            font-size:14px;
            color:var(--colorGreen);
        }`

    const title = cE("div", style)
    title.innerHTML = "Alterar " + t
    return(title)
}