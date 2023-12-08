import { SectionDiv, Title, Info, Button } from "./style.js"

export function HelpScreen(atr){
    return(
    <SectionDiv $display={atr.$display}>
    <Title>Ajuda</Title>
    <Info>
        <div>Essa seção ainda está sendo desenvolvida 😅</div>
    </Info>
    <Button><button onClick={() => atr.setFunc(false)}>Fechar</button></Button>
    </SectionDiv>   
    )
}