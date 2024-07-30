export default function accountTotal(capital){
    return(`
        <div class="homeBodyLeftSideAccountTotalDiv">
            <div class="homeBodyLeftSideAccountTotalTitle">
                Capital investido
            </div>
            <div class="homeBodyLeftSideAccountTotalContents">
                <div class="homeBodyLeftSideAccountTotalContent">
                    R$ ${capital}
                </div>
                <div class="homeBodyLeftSideAccountTotalContent" style="color: rgb(0, 255, 150); font-weight: 600">
                    24%m
                </div>
            </div>
        </div>    
    `)
}