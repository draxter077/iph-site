import { SectionDiv, Input } from "./style.js"

export function AcessContainer(atr){
    return(
        <SectionDiv $loading={atr.loadingAnimation}>
            {atr.openSignUp ? "Crie uma conta" : "Entre na sua conta"}
            <div>
                <Input placeholder="Nome" $display={atr.openSignUp} $wrong={atr.wrongName}></Input>
                <Input placeholder="Email" $display={true} $wrong={atr.wrongEmail}></Input>
                <Input type="password" placeholder="Senha" $display={true} $wrong={atr.wrongPass}></Input>
                <Input type="password" placeholder="Confirme sua senha" $display={atr.openSignUp} $wrong={atr.wrongConfPass}></Input>
            </div>
            <button disabled={atr.buttonDis} onClick={atr.openSignUp ? (e) => atr.signUp(e) : (e) => atr.logIn(e)}>{atr.openSignUp ? "Criar" : "Entrar"}</button>
        </SectionDiv>
    )
}