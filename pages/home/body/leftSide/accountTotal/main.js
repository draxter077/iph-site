export default function accountTotal(data){
    const accountTotal = document.createElement("div")
    accountTotal.className = "homeBodyLeftSideAccountTotal"
        const title = document.createElement("div")
        title.className = "homeBodyLeftSideAccountTotalTitle"
        title.innerHTML = "Capital investido"
        accountTotal.appendChild(title)

        const contents = document.createElement("div")
        contents.className = "homeBodyLeftSideAccountTotalContents"
            const value = document.createElement("div")
            value.innerHTML = "R$ " + data.capital.toString().replaceAll(".", ",")
            contents.appendChild(value)

            const rent = document.createElement("div")
            rent.style = `color: ${data.averageRent >= 0 ? "rgb(0, 255, 150)" : "rgb(255, 0, 150)"}; font-weight: 600`
            rent.innerHTML = data.averageRent + "%m"
            console.log(data)
            contents.appendChild(rent)
        accountTotal.appendChild(contents)
    return(accountTotal)
}