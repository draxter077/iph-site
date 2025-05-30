export default function config(){
    let style = `
        {
            height:40px;
            background:var(--colorWhite);
            padding:5px;
            border-radius:50%;
            cursor:pointer;
            transition:transform 0.5s;
        }
        :hover{
            transform:rotate(100deg);
        }
        :responsive{
            height:30px;
            padding:3px;
        }`

    const config = cE("img", style)
    config.src = "./assets/config.png"
    config.addEventListener(
        "click",
        function a(){
            let mH = document.getElementById("configurações").style.maxHeight
            if(mH == "1000px"){document.getElementById("configurações").style.maxHeight = "0px"}
            else{document.getElementById("configurações").style.maxHeight = "1000px"}
        }
    )
    return(config)
}