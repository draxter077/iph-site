import { GroupDiv, Logo, Buttons } from "./style.js"

export function Topo(atr){
    return(
        <GroupDiv>
            <Logo>inv:PH</Logo>
            <Buttons>
                <button onClick={() => atr.setShowHelp(true)}>Ajuda</button>
                <button onClick={() => atr.setOpenConfig(!atr.openConfig)}>Configurações</button>
                <button onClick={atr.changeWindow}>Sair</button>
            </Buttons>
        </GroupDiv>
    )
}