export default function input(placeholder, type){
    let style = `
        {
            width: 300px;
            padding: 10px 15px;
            border: 1px solid var(--color02Black);
            border-radius: 10px;
            margin: 0px 0px 10px 0px;
            font-size: 15px;
            transition: border var(--transitionTime);
        }
        :hover{
            border: 1px solid var(--colorGreen);
        }
        :focus{
            border: 1px solid var(--colorGreen);
        }
        :responsive{
            width: 100%;
        }`

    const input = cE("input", style)
    input.placeholder = placeholder
    if(type != undefined){
        input.type = type
    }
    return(input)
}