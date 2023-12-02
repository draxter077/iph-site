import { GroupDiv, Logo, Buttons } from "./style.js"

export function Topo(atr){
    return(
        <GroupDiv>
            <Logo>inv:PH</Logo>
            <Buttons>
                <button onClick={() => atr.openConfig(true)}>Depósito</button>
                <button onClick={() => atr.openConfig(true)}>Retirada</button>
                <button onClick={() => atr.setShowHelp(true)}>Ajuda</button>
                <button onClick={() => atr.openConfig(true)}>Configurações</button>
                <button onClick={atr.changeWindow}>Sair</button>
            </Buttons>
        </GroupDiv>
    )
}