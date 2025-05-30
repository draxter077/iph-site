export default function title(){
    let style = `
        {
            color: var(--colorBlack);
            font-size: 25px;
            font-weight: 600;
        }`
    const title = cE("div", style)
    title.innerHTML = "Alocação do capital"
    return(title)
}