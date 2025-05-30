export default function input(){
    let style = `
        {
            font-size:calc(0.5*var(--titleFontSize));
            padding:5px 10px;
            border-bottom:1px solid var(--colorGreen);
            color:var(--colorWhite);
            width:10%;
            margin:0px 0px 0px 40px;
        }
        :responsive{width:25%;}`

    const input = cE("input", style)
    input.type = "password"
    return(input)
}