import axios from "axios"
import { API } from "../../../../variablesValues.js"
import { SectionDiv, Title, Info, InputSection, Button } from "./style.js"

export function WithDraws(atr){
    async function withdrawRequest(e){
        let value = e.target.parentElement.children[0].value
        value = value.replaceAll(",", ".")
        value = Number(value)
        await axios.post(API + "/withdraw", {userID: Number(atr.userID), value: value})
            .then(resposta => {e.target.parentElement.children[0].value = "Recebido 😉"})
            .catch(response => {alert(response.response)})
    }
    return(
    <SectionDiv $display={atr.showWithdraws}>
        <Title>Nova retirada</Title>
        <Info>
            <div>Devido à natureza das contas, o valor retirado só pode ser transferido via TED. Por isso, pode levar até 24h úteis para aparecer em sua conta.</div>
            <InputSection>
                <input placeholder="Digite o valor (ex: 1234,56)"></input>
                <button onClick={(e) => withdrawRequest(e)}>Retirar</button>
            </InputSection>
        </Info>
        <Button><button onClick={() => atr.setShowWithdraws(false)}>Fechar</button></Button>
    </SectionDiv>       
    )
}