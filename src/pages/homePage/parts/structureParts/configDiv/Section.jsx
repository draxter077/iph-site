import { SectionDiv } from "./style.js"

export function ConfigDiv(atr){
    return(
        <SectionDiv $display={atr.openConfig}>
            <div>
                <button onClick={() => atr.setBlockBackChange(false)}>parar fundo</button>
            </div>
        </SectionDiv>
    )
}