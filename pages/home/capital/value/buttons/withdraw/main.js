import line from "../line/main.js"

export default function withdraw(){
    let style = `
        {
            height:40px;
            background:var(--colorRed);
            padding:10px;
            border-radius:10px;
            transform:rotate(-90deg);
            transition:transform 0.2s;
            cursor:pointer;
        }
        :hover{
            transform:rotate(-90deg) scale(1.1);
        }
        :responsive{
            height:30px;
            padding:5px;
        }`

    const withdraw = cE("img", style)
    withdraw.title = "Nova retirada"
    withdraw.src = "./assets/arrow.png"
    withdraw.addEventListener(
        "click",
        function a(){
            let cs = document.getElementById("list").children
            if(cs.length > 0){
                document.getElementById("list").insertBefore(line({detail:"Nova retirada"}), cs[0])
            }
            else{
                document.getElementById("list").appendChild(line({detail:"Nova retirada"}))
            }
            document.getElementById("list").children[0].children[1].focus()
        }
    )
    return(withdraw)
}