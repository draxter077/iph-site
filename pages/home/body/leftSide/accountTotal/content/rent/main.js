export default function rent(value){
    const rent = cE("div", undefined)
    rent.style = `color: ${value >= 0 ? "var(--colorGreen)" : "rgb(255, 0, 150)"}; font-weight: 600`
    rent.innerHTML = value + "%m"
    return(rent)
}