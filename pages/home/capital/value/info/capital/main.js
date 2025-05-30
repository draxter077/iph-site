export default function capital(cap){
    let style = `
        {
            font-size:40px;
            color:var(--colorWhite);
        }
        :responsive{
            font-size:32px;
        }`

    const capital = cE("div", style)
    capital.innerHTML = stringifyNumber(cap)
    return(capital)
}