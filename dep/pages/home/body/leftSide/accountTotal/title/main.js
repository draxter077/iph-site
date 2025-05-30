export default function title(){
    let style = `
        {
            color: var(--primaryGreen);
            font-size: 25px;
            font-weight: 600;
            margin: 0px 0px 10px 0px;
        }`
    const title = cE("div", style)
    title.innerHTML = "Capital investido"
    return(title)
}