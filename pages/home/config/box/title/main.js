export default function title(name){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorGreen);
            width:100%;
            padding:5px 10px;
        }
        :responsive{
            font-size:19px;
        }`

    const title = cE("div", style)
    title.innerHTML = "Configurações de " + name.split(" ")[0]
    return(title)
}