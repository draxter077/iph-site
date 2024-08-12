export default function aboutUs(){
    const aboutUs = document.createElement("div")
    aboutUs.className = "aboutUs"

    const aboutUsText = document.createElement("div")
    aboutUsText.innerHTML = `
        A iPH nasceu em 17/09/2023, com o objetivo de ser uma solução simples para o
        gerenciamento do seu capital.<br><br>
        Acreditamos que investimentos devem ser realizados seguindo três princípios:
        lógica, estruturação e consistência. Assim, diversificamos seu capital em
        quatro ativos: renda fixa, ações estrangeiras, ações nacionais e mercado futuro.
        A proporção do seu capital em cada um deles será definida por oportunidades lógicas, 
        respeitando a estrutura de um gerenciamento de risco; tudo isso seguindo a 
        consistência de um sistema inteligente.<br><br>
        Seja bem-vindo à iPH!`
    aboutUs.appendChild(aboutUsText)

    return(aboutUs)
}