import { Background } from "./helpStyle.js"

export function HelpScreen(atr){
    return(
        <Background $display={atr.$display}>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <span>teste</span>
            <button onClick={() => atr.setFunc(false)}>Fechar</button>
        </Background>
    )
}