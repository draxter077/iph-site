import { GroupDiv } from "./style.js"

export function AcessContainer(atr){
    return(
        <GroupDiv $loading={atr.loadingAnimation}>
            {atr.openSignUp ? "Crie uma conta" : "Entre na sua conta"}
            <div>
                <input placeholder="Nome" $display={atr.openSignUp} $wrong={atr.wrongName}></input>
                <input placeholder="Email" $display={true} $wrong={atr.wrongEmail}></input>
                <input type="password" placeholder="Senha" $display={true} $wrong={atr.wrongPass}></input>
                <input type="password" placeholder="Confirme sua senha" $display={atr.openSignUp} $wrong={atr.wrongConfPass}></input>
            </div>
            <button disabled={atr.buttonDis} onClick={(e) => atr.openSignUp ? () => atr.signUp(e) : () => atr.logIn(e)}>{atr.openSignUp ? "Criar" : "Entrar"}</button>
        </GroupDiv>
    )
}