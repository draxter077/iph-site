export default function capitalAllocation(){
    const capitalAllocation = document.createElement("div")
    capitalAllocation.className = "homeBodyRightSideCapitalAllocation"
        const title = document.createElement("div")
        title.className = "homeBodyRightSideCapitalAllocationTitle"
        title.innerHTML = "Alocação do capital"
        capitalAllocation.appendChild(title)

        const content = document.createElement("div")
        content.className = "homeBodyRightSideCapitalAllocationContent"
        let childs = ["Mercado Futuro: 17%", "Ações estrangeiras: 15%", "Ações nacionais: 18%", "CDI/CDB: 50%"]
        for(let i = 0; i < childs.length; i++){
            let d = document.createElement("div")
            d.innerHTML = childs[i]
            content.appendChild(d)
        }
        capitalAllocation.appendChild(content)
    return(capitalAllocation)
}