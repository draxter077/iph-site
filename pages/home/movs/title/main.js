export default function title(){
    let style = `
        {
            font-size:27px;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorGreen);
            padding:0px 0px 5px 0px;
        }
        :responsive{
            font-size:22px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Movimentações"
    return(title)
}