import { GroupDiv, Indicador, Titulo, Linhas, Linha } from "./style.js"

export function InformacoesDetalhadas(atr){
    return(
        <GroupDiv>
        {atr.infoDet.map(dado =>
            <Indicador>
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

            </Indicador>
        )}
        </GroupDiv>
    )
}