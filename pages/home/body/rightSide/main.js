import capitalAllocation from "./capitalAllocation/main.js"
import returnsGraph from "./returnsGraph/main.js"

export default function homeBodyRightSideDiv(data){
    const rightSide = document.createElement("div")
    rightSide.className = "homeBodyRightSide"
    rightSide.appendChild(capitalAllocation())
    rightSide.appendChild(returnsGraph(data.userInfo))
    return(rightSide)
}