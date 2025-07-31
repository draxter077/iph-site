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
    copy.addEventListener(
        "click",
        function a(){
            let text = document.createElement("textarea");
            text.value = text;
            document.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.removeChild(text)
        }
    )
    return(copy)
}