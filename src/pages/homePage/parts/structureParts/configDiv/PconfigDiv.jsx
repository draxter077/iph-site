import { ConfigDiv } from "./style.js"

export function PconfigDiv(atr){
    return(
        <ConfigDiv $display={atr.openConfig}>
            <div>
                <button onClick={() => atr.setBlockBackChange(false)}>parar fundo</button>
            </div>
        </ConfigDiv>
    )
}