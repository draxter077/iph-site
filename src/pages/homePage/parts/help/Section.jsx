import { SectionDiv, Info, Title, Button } from "./style.js"

export function HelpScreen(atr){
    return(
        <SectionDiv $display={atr.showHelp}>
            <Title>Ajuda</Title>
            <Info>
                Oi
            </Info>
            <Button><button onClick={() => atr.setShowHelp(false)}>Fechar</button></Button>
        </SectionDiv>
    )
}