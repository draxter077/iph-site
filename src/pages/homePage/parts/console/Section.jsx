import { SectionDiv } from "./style.js"
import { API } from "../../../../variablesValues.js"

export function ConsoleLine(atr){
    async function send(e){
        let line = e.target.parentElement.children[0].value
        let commands = line.split("+")
        const commandType = commands[0]
        const commandValue = Number(commands[1])
        const date = {day: Number(commands[2]), month: Number(commands[3]), year: Number(commands[4])}

        if(commandType == "revenue"){
            await atr.axios.post(API + "/revenueReport", {revenue: commandValue, date: date})
                .then(resposta => {alert(resposta.status)})
                .catch(response => {alert(response.response)})
        }
        else if(commandType == "darf"){
            await atr.axios.post(API + "/darfValue", date)
                .then(resposta => {alert(resposta.data.value)})
                .catch(response => {alert(response.response)})
        }
    }
    return(
        <SectionDiv>
            <input placeholder="Digite o comando (+ to args)"></input>
            <button onClick={(e) => send(e)}>Enviar</button>
        </SectionDiv>
    )
}