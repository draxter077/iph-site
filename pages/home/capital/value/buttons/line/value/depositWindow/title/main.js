export default function title(){
    let style = `
        {
            width:100%;
            text-align:center;
            font-size:18px;
            color:var(--colorBlack);
        }`

    const title = cE("div", style)
    title.innerHTML = "Aqui está o QRCode para a transferência!"
    return(title)
}