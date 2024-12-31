import capitalAllocation from "./capitalAllocation/main.js"
import returnsGraph from "./returnsGraph/main.js"

export default function homeBodyRightSideDiv(data){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 70%;
            padding: 10px;
        }
        :responsive{
            width: 100%;
        }`
    const rightSide = cE("div", style)
    rightSide.appendChild(capitalAllocation())
    rightSide.appendChild(returnsGraph(data.userInfo))
    return(rightSide)
}