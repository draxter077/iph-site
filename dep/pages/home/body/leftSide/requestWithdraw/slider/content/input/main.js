export default function input(){
    let style = `
        {
            border: 1px solid var(--colorGreen);
            padding: 10px 15px;
            width: 40%;
            border-radius: 10px 0px 0px 10px;
            height: 100%;
        }
        :focus{
            border: 1px solid var(--colorGreen);
        }`
    const input = cE("input", style)
    input.type = "number"
    input.placeholder = "1234,56"
    return(input)
}