import { InformacoesDetalhadas, InfoDet, Dets, Titulo, Linhas, Linha } from "./style.js"

export function PinformacoesDetalhadas(atr){
    return(
        <InformacoesDetalhadas>
        {atr.infoDet.map(dado =>
            <InfoDet>
                <Dets>
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
                 </Dets>
            </InfoDet>
        )}
        </InformacoesDetalhadas>
    )
}