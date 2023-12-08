import { SectionDiv, PaddingDiv, Title, ChangePasswordDiv, DivTitle } from "./style.js"
import { API } from "../../../../../variablesValues.js"
import axios from "axios"

export function ConfigDiv(atr){
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    async function changePass(e){
        let password = e.target.parentElement.children[2].value
        if(password != e.target.parentElement.children[1].value || password == ""){
            e.target.innerHTML = "As senhas estão diferentes :("
            await sleep(3000)
            e.target.innerHTML = "Alterar senha"
        }
        else{
            await axios.post(API + "/changePassword", {userID: atr.userID, newPassword: password})
                .then(resposta => {e.target.innerHTML = "Senha alterada 😉"})
                .catch(response => {console.log(response.response); e.target.innerHTML = "Houve um erro 😕"})
        }
    }
    return(
        <SectionDiv $display={atr.openConfig}>
            <PaddingDiv>
                <Title>Configurações</Title>
                <ChangePasswordDiv>
                    <DivTitle>Alterar senha</DivTitle>
                    <input type="password" placeholder="Digite sua nova senha"></input>
                    <input type="password" placeholder="Só mais uma vez"></input>
                    <button onClick={(e) => changePass(e)}>Alterar senha</button>
                </ChangePasswordDiv>
                <button style={{margin: "20px 0px 0px 0px"}} onClick={() => atr.setBlockBackChange(true)}>Desabilitar mudança de fundo</button>
            </PaddingDiv>
        </SectionDiv>
    )
}