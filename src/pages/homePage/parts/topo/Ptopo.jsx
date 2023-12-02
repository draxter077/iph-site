import { Topo, Logo, Topodiv, TopoButton } from "./style.js"

export function Ptopo(atr){
    return(
        <Topo>
        <Logo>inv:PH</Logo>
        <Topodiv>
            <div>
                <TopoButton onClick={() => atr.openConfig(true)}>Depósito</TopoButton>
            </div>
            <div>
                <TopoButton onClick={() => atr.openConfig(true)}>Retirada</TopoButton>
            </div>
            <div>
                <TopoButton onClick={() => atr.setShowHelp(true)}>Ajuda</TopoButton>
            </div>
            <div>
                <TopoButton onClick={() => atr.openConfig(true)}>Configurações</TopoButton>
            </div>
            <TopoButton onClick={atr.changeWindow}>Sair</TopoButton>
        </Topodiv>
        </Topo>
    )
}