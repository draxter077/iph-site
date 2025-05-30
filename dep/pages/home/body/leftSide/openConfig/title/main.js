export default function title(){
    let style = `
        {
            font-size: 25px;
            font-weight: 600;
            width: 100%;
            margin: 0px 50px 0px 0px;
        }`
    const title = cE("div", style)
    title.innerHTML = "Configurações"
    return(title)
}