export default function disclaimer(){
    let style = `
        {
            margin: 10px 0px 0px 0px;
            font-style: italic;
        }`
    const disclaimer = cE("div", style)
    disclaimer.innerHTML = `Este site não salva dados no seu navegador, de tal forma que
                            você será automaticamente deslogado assim que fechar a aba.`
    return(disclaimer)
}