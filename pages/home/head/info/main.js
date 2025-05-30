export default function info(){
    let style = `
        {
            height:40px;
            width:40px;
            font-size:32px;
            color:var(--colorBlack);
            background:var(--colorWhite);
            border-radius:50%;
            transition:transform 0.5s;
        }
        :hover{
            transform:rotate(-180deg)
        }
        :responsive{
            height:30px;
            width:30px;
            font-size:25px;
        }`

    const info = cE("button", style)
    info.innerHTML = "?"
    info.addEventListener(
        "click",
        function a(){
            let mH = document.getElementById("informações").style.maxHeight
            if(mH == "1000px"){document.getElementById("informações").style.maxHeight = "0px"}
            else{document.getElementById("informações").style.maxHeight = "1000px"}
        }
    )
    return(info)
}