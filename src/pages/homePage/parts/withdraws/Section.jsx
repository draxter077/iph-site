import { SectionDiv, Title } from "./style.js"

export function WithDraws(atr){
    return(
    <SectionDiv $display={atr.showWithdraws}>
        <Title>Nova retirada</Title>
        <input placeholder="Valor"></input>
        <button onClick={() => atr.setShowWithdraws(false)}>Fechar</button>
    </SectionDiv>     
    )
}