import { InformacoesBasicas, InfoBas, IBTitle, IBValue } from "./style"

export function PinformacoesBasicas(atr){
    return(
        <InformacoesBasicas>
            {atr.infoBas.map(dado =>
            <InfoBas>
                <IBTitle>{dado.name}</IBTitle>
                {dado.change == undefined ? <IBValue $color="none"><div>{dado.value}</div></IBValue> : <IBValue color={dado.change >= 0 ? "rgb(0, 210, 0)" : "rgb(255, 0, 0)"}><div>{dado.value}</div><div>{dado.change >= 0 ? "+" : "-"}{dado.change + "%"}</div></IBValue>}
            </InfoBas>
            )}
        </InformacoesBasicas>
    )
}