export default function logo(){
    let style = `
        {
            padding: 20px;
            border: 2px solid var(--colorGreen);
            border-radius: 20px;
            color: var(--colorGreen);
            font-weight: 900;
            font-size: 40px;
            margin: 0px 0px 30px 0px;
        }`
    const logo = cE("div", style)
    logo.innerHTML = "iPH"
    return(logo)
}