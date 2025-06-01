export default function allocation(){
    let style = `
        {
            font-size:15px;
            color:var(--colorWhite);
            margin:10px 0px 0px 0px;
        }
        :responsive{
            font-size:12px;
        }`

    const allocation = cE("div", style)
    allocation.innerHTML = "Atualmente, seu capital está investido em Ações Estrangeiras e Renda Fixa<br>Não foram encontradas oportunidades em Mercado Futuro"
    return(allocation)
}