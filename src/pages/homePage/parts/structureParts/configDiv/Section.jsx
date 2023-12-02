import { GroupDiv } from "./style.js"

export function PconfigDiv(atr){
    return(
        <GroupDiv $display={atr.openConfig}>
            <div>
                <button onClick={() => atr.setBlockBackChange(false)}>parar fundo</button>
            </div>
        </GroupDiv>
    )
}