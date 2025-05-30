export default function logo(){
    let style = `
        {
            width:8%;
            opacity:0;
            animation:opacity 0.5s linear 0s 1 forwards;
        }
        :responsive{
            width:30%;
        }`

    const logo = cE("img", style)
    logo.src = "./assets/logo.png"
    return(logo)
}