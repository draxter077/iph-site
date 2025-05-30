export default function title(){
    let style = `
        {
            width:100%;
            text-align:center;
            font-size:18px;
            color:var(--colorBlack);
        }`

    const title = cE("div", style)
    title.innerHTML = "Tem certeza de que deseja fazer uma retirada?"
    return(title)
}