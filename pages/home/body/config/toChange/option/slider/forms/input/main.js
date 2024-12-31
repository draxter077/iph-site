export default function input(data){
    let style = `
        {
            border: 1px solid var(--colorGreen);
            border-radius: 10px 0px 0px 10px;
            padding: 10px 15px;
            width: 50%;
            color: var(--colorBlack);
        }` 
    const input = cE("input", style)
    input.placeholder = data.input
    input.value = data.current
    return(input)
}