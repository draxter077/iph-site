export default function change(){
    let style = `
        {
            position:relative;
            font-size:15px;
            color:var(--colorWhite);
            font-weight:600;
        }
        ::after{
            content:"";
            position:absolute;
            bottom:0%;
            left:0%;
            width:0%;
            height:1px;
            background:var(--colorGreen);
            transition:width 0.5s;
        }
        :hover::after{
            width:100%;
        }
        :focus{
            border:none;
        }`
    
    const change = cE("button", style)
    change.innerHTML = "Criar conta"
    change.addEventListener(
        "click",
        function a(e){
            if(document.getElementById("signUpInputs").style.maxHeight == "100%"){
                document.getElementById("signUpInputs").style.maxHeight = "0%"
                document.getElementById("enter").innerHTML = "Entrar"
                e.target.innerHTML = "Criar conta"
            }
            else{
                document.getElementById("signUpInputs").style.maxHeight = "100%"
                document.getElementById("enter").innerHTML = "Criar"
                e.target.innerHTML = "Entrar em uma conta"
            }
            
        }
    )
    return(change)
}