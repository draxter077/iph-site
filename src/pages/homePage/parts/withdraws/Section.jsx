import { SectionDiv, Title, Info, InputSection, Button } from "./style.js"

export function WithDraws(atr){
    return(
    <SectionDiv $display={atr.showWithdraws}>
        <Title>Nova retirada</Title>
        <Info>
            <div>Devido à natureza das contas, o valor retirado só pode ser transferido via TED. Por isso, pode levar até 24h úteis para aparecer em sua conta.</div>
            <InputSection>
                <input placeholder="Digite o valor (ex: 1234,56)"></input>
                <button>Retirar</button>
            </InputSection>
        </Info>
        <Button><button onClick={() => atr.setShowWithdraws(false)}>Fechar</button></Button>
    </SectionDiv>       
    )
}