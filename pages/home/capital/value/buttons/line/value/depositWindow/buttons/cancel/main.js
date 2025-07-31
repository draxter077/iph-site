export default function cancel(input){
    let style = `
        {
            position:relative;
            font-size:16px;
            color:var(--colorRed);
            padding:0px 5px;
            cursor:pointer;
        }
        ::after{
            position:absolute;
            content:"";
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorRed);
            transition:width 0.5s;
        }
        :hover::after{
            width:100%;
        }`

    const cancel = cE("div", style)
    cancel.innerHTML = "Cancelar"

    cancel.addEventListener(
        "click",
        async function a(e){
            document.getElementById("list").removeChild(input.parentElement)
            let depositWindow = e.target.parentElement.parentElement
            depositWindow.style.transform = "scale(0)"
            await new Promise(resolve => setTimeout(resolve, 500))
            document.getElementById("root").removeChild(depositWindow)
        }
    )
    return(cancel)
}