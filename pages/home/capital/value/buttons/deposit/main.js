import line from "../line/main.js"

export default function deposit(){
    let style = `
        {
            height:40px;
            transform:rotate(90deg);
            background:var(--colorGreen);
            padding:10px;
            border-radius:10px;
            margin:0px 10px 0px 0px;
            transition:transform 0.2s;
            cursor:pointer;
        }
        :hover{
            transform:rotate(90deg) scale(1.1);
        }
        :responsive{
            height:30px;
            padding:5px;
        }`

    const deposit = cE("img", style)
    deposit.title = "Novo depósito"
    deposit.src = "./assets/arrow.png"
    deposit.addEventListener(
        "click",
        function a(){
            let cs = document.getElementById("list").children
            if(cs.length > 0){
                document.getElementById("list").insertBefore(line({detail:"Novo depósito"}), cs[0])
            }
            else{
                document.getElementById("list").appendChild(line({detail:"Novo depósito"}))
            }
            document.getElementById("list").children[0].children[1].focus()
        }
    )
    return(deposit)
}