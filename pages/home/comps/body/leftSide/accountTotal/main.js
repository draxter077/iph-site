export default function accountTotal(data){
    return(`
        <div class="homeBodyLeftSideAccountTotal">
            <div class="homeBodyLeftSideAccountTotalTitle">
                Capital investido
            </div>
            <div class="homeBodyLeftSideAccountTotalContents">
                <div>
                    R$ ${data.capital.toString().replaceAll(".", ",")}
                </div>
                <div style="color: ${data.averageRent >= 0 ? "rgb(0, 255, 150)" : "rgb(255, 0, 150)"}; font-weight: 600">
                    ${data.averageRent}%m
                </div>
            </div>
        </div>    
    `)
}