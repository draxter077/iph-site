export default function accountTotal(data){
    return(`
        <div class="homeBodyLeftSideAccountTotalDiv">
            <div class="homeBodyLeftSideAccountTotalTitle">
                Capital investido
            </div>
            <div class="homeBodyLeftSideAccountTotalContents">
                <div class="homeBodyLeftSideAccountTotalContent">
                    R$ ${data.capital.toString().replaceAll(".", ",")}
                </div>
                <div class="homeBodyLeftSideAccountTotalContent" style="color: ${data.averageRent >= 0 ? "rgb(0, 255, 150)" : "rgb(255, 0, 150)"}; font-weight: 600">
                    ${data.averageRent}%m
                </div>
            </div>
        </div>    
    `)
}