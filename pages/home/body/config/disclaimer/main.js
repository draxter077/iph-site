export default function disclaimer(){
    const disclaimer = document.createElement("div")
    disclaimer.className = "homeBodyConfigDisclaimer"
    disclaimer.innerHTML = `Este site não salva dados no seu navegador, de tal forma que
                            você será automaticamente deslogado assim que fechar a aba.`
    return(disclaimer)
}