function returnR$(n){
    let parts = n.toString().replaceAll(".", ",").split(",")

    let decimals
    if(parts.length > 1){
        decimals = parts[1]
        if(decimals.length == 1){
            decimals += "0"
        }
        else if(decimals.length > 2){
            decimals = Math.round(Number(decimals)/(10*(decimals.length - 2))).toString()
        }
    }
    else{
        decimals = "00"
    }

    let digits = ""
    if(parts[0].length > 3){
        let m = parts[0].length%3
        for(let i = 0; i < parts[0].length; i++){
            if((i - m)%3 == 0 && (i != 0)){
                digits += "."
            }
            digits += parts[0][i]
        }
    }
    else{
        digits = parts[0]
    }

    return("R$ " + digits + "," + decimals)
}

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
            value.innerHTML = returnR$(data.capital)
            contents.appendChild(value)

            const rent = document.createElement("div")
            rent.style = `color: ${data.averageRent >= 0 ? "rgb(0, 255, 150)" : "rgb(255, 0, 150)"}; font-weight: 600`
            rent.innerHTML = data.averageRent + "%m"
            contents.appendChild(rent)
        accountTotal.appendChild(contents)
    return(accountTotal)
}