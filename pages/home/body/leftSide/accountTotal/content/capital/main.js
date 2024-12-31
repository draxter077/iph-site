export default function capital(value){
    const capital = cE("div", undefined)
    capital.innerHTML = returnR$(value)
    return(capital)
}


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