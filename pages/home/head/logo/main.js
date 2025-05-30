export default function logo(){
    let style = `
        {
            height:120px;
        }
        :responsive{
            height:90px;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.png"
    return(logo)
}