export default function input(t){
    let style = `
        {
            width:20%;
            font-size:17px;
            padding:5px;
            border-bottom:1px solid var(--colorWhite);
            color:var(--colorWhite);
            transition:border 0.5s;
            margin:0px 0px 20px 0px;
        }
        @keyframes wrong{
            50%[border-bottom:1px solid var(--colorRed)]
            100%[border-bottom:1px solid var(--colorWhite)]
        }
        :responsive{
            width:80%;
        }
        ::placeholder{
            font-style:italic;
        }
        :hover,:focus{
            border-bottom:1px solid var(--colorGreen);
        }`

    const input = cE("input", style)
    input.id = t.toLowerCase()
    input.placeholder = t
    if(t=="senha"){input.type="password"}
    return(input)
}