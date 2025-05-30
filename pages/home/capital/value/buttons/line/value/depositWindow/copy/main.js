export default function copy(brCode){
    let style = `
        {
            height:30px;
            width:30px;
            cursor:pointer;
            transition:transform 0.2s
        }
        :hover{
            transform:scale(1.05);
        }`

    const copy = cE("img", style)
    copy.src = "./assets/copy.png"
    copy.addEventListener("click", () => navigator.clipboard.writeText(brCode))
    return(copy)
}