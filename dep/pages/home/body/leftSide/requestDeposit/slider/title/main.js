export default function title(){
    let style = `
        {
            font-size: 25px;
            font-weight: 600;
            width: 50%;
        }`
    const title = cE("div", style)
    title.innerHTML = "Depositar"
    return(title)
}