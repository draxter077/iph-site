import { GroupDiv, Logo } from "./style.js"

export function Topo(atr){
    return(
        <GroupDiv>
            <Logo>inv:PH</Logo>
            <button onClick={() => atr.setShowHelp(true)}>Ajuda</button>
        </GroupDiv>
    )
}