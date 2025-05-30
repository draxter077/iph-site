import title from "./title/main.js"
import qr from "./qr/main.js"
import copy from "./copy/main.js"
import disclaimer from "./disclaimer/main.js"
import buttons from "./buttons/main.js"

export default async function depositWindow(input){
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

    const depositWindow = cE("div", style)
    // enviar email para mim avisando do pedido de depósito
    let brCode
    await axios.get("https://gerarqrcodepix.com.br/api/v1?nome=iph&cidade=Curitiba&saida=br&chave=i@ph.net.br&valor=" + input.value.toString())
        .then(r => {brCode = r.data.brcode;console.log(r)})
        .catch(r => {console.log(r.response);brCode = `00020126330014br.gov.bcb.pix0111i@ph.net.br5204000053039865802BR5903iph6008Curitiba62070503***630454A4&amp`})
        
    depositWindow.appendChild(title())
    depositWindow.appendChild(qr(brCode))
    depositWindow.appendChild(copy(brCode))
    depositWindow.appendChild(disclaimer())
    depositWindow.appendChild(buttons(input))
    return(depositWindow)
}