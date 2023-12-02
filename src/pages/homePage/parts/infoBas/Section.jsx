import { SectionDiv, Info, ITitle, IValue, NewThing } from "./style"
import PlusIcon from "./imgs/plusIcon.png"

export function InformacoesBasicas(atr){
    return(
        <SectionDiv>
            {atr.infoBas.map(dado =>
            <Info>
                <ITitle>{dado.name}</ITitle>
                {dado.change == undefined 
                ? <IValue $color="none"><div>{dado.value}</div>{dado.name == "Depósitos totais" || dado.name == "Retiradas totais" 
                                                                ? <NewThing onClick={() => console.log("oi")}><img src={PlusIcon}></img></NewThing> 
                                                                : undefined}</IValue> 
                : <IValue color={dado.change >= 0 
                                ? "rgb(0, 210, 0)" 
                                : "rgb(255, 0, 0)"}><div>{dado.value}</div><div>{dado.change >= 0 
                                                                                ? "+" 
                                                                                : "-"}{dado.change + "%"}</div></IValue>}
            </Info>
            )}
        </SectionDiv>
    )
}