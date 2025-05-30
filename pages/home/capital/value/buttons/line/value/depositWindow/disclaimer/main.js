export default function disclaimer(){
    let style = `
        {
            width:100%;
            text-align:center;
            font-size:14px;
            color:var(--colorBlack);
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = "Devido ao tempo de transferência entre contas, seu depósito pode levar até um dia útil para ser reconhecido. Caso não seja concluído, ele será cancelado automaticamente."
    return(disclaimer)
}