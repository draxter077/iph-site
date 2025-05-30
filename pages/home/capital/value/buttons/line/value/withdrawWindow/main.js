import title from "./title/main.js"
import disclaimer from "./disclaimer/main.js"
import buttons from "./buttons/main.js"

export default function withdrawWindow(input){
    let style = `
        {
            position:fixed;
            top:15%;
            left:25%;
            width:50%;
            height:70%;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-items:center;
            padding:10px 15px;
            background:var(--colorWhite);
            box-shadow:0px 0px 10px 5px var(--colorBlack);
            border-radius:15px;
            transform:scale(0);
            transition:transform 0.5s;
        }
        :responsive{
            top:5%;
            left:5%;
            width:90%;
            height:90%;
        }`

    const withdrawWindow = cE("div", style)
    withdrawWindow.appendChild(title())
    withdrawWindow.appendChild(disclaimer(input.value))
    withdrawWindow.appendChild(buttons(input))
    return(withdrawWindow)
}