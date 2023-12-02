import { SectionDiv, Info, Titulo, Linhas, Linha } from "./style.js"

export function InformacoesDetalhadas(atr){
    return(
        <SectionDiv>
        {atr.infoDet.map(dado =>
            <Info>
                <Titulo>{dado.title}</Titulo>
                <Linhas>
                {dado.lines.length == 0 ? "Sem informações para essa categoria" : undefined}
                {dado.lines.map(valor =>
                    <Linha>
                        <div>{valor.name}</div>
                        <div>{valor.value}</div>
                    </Linha>
                )}
                </Linhas>
            </Info>
        )}
        </SectionDiv>
    )
}