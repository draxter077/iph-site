export default function disclaimer(value){
    let style = `
        {
            width:100%;
            text-align:center;
            font-size:14px;
            color:var(--colorBlack);
        }`

    const disclaimer = cE("div", style)
    disclaimer.innerHTML = `Será retirado ${stringifyNumber(value.replaceAll(".","").replaceAll(",",".").replaceAll("R$ ",""))} de sua conta.<br>Devido ao tempo de transferência entre contas, sua retirada pode levar até um dia útil para ser concluída.`
    return(disclaimer)
}