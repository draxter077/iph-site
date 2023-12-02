import { SectionDiv, Info, ITitle, IValue } from "./style"

export function InformacoesBasicas(atr){
    return(
        <SectionDiv>
            {atr.infoBas.map(dado =>
            <Info>
                <ITitle>{dado.name}</ITitle>
                {dado.change == undefined ? <IValue $color="none"><div>{dado.value}</div></IValue> : <IValue color={dado.change >= 0 ? "rgb(0, 210, 0)" : "rgb(255, 0, 0)"}><div>{dado.value}</div><div>{dado.change >= 0 ? "+" : "-"}{dado.change + "%"}</div></IValue>}
            </Info>
            )}
        </SectionDiv>
    )
}