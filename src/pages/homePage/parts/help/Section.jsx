import { SectionDiv, Info, Title, Button } from "./style.js"

export function HelpScreen(atr){
    return(
        <SectionDiv $display={atr.showHelp}>
            <Title>Ajuda</Title>
            <Info>
                <div>Aqui é a sua página de acompanhamento 👀</div>
                <div>Nela você tem acesso a todas as informações da sua conta</div>
                <div>É importante lembrar que ainda estou em desenvolvimento e novas ferramentas são adicionadas periodicamente 😁</div>
                <div>Caso ainda tenha dúvidas, você pode me enviar um email: <span style={{fontWeight: "700"}}>invester.ph@gmail.com</span></div>
            </Info>
            <Button><button onClick={() => atr.setShowHelp(false)}>Fechar</button></Button>
        </SectionDiv>
    )
}