import { SectionDiv } from "./style.js"

export function ConsoleLine(atr){
    async function send(e){
        let line = e.target.parentElement.children[0].value
        let commands = line.split("-")

        if(commands[0] == "revenue"){
            await atr.axios.post(API + "/revenueReport", {revenue: commands[1]})
                .then(resposta => {alert(resposta.status)})
                .catch(response => {alert(response.response)})
        }
    }
    return(
        <SectionDiv>
            <input placeholder="Digite o comando"></input>
            <button onClick={(e) => send(e)}>Enviar</button>
        </SectionDiv>
    )
}