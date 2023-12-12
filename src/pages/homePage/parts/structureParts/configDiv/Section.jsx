import { SectionDiv, PaddingDiv, Title, ChangePasswordDiv, DivTitle } from "./style.js"
import { inputError } from "../../../../generalFunctions/windowsRelated.js"

import { API } from "../../../../../variablesValues.js"

import axios from "axios"
import { useState } from "react"

export default function ConfigDiv(atr){
    const [wrongPass, setWrongPass] = useState(false)
    const [buttonDis, setButtonDis] = useState(false)
    const [loadingAnimation, setLoadingAnimation] = useState(false)

    const setObj = {setButtonDis: setButtonDis, 
        setAlertText: atr.setAlertText, 
        setShowAlert: atr.setShowAlert, 
        setLoadingAnimation: setLoadingAnimation}

    async function changePass(e){
        let password = e.target.parentElement.children[2].value
        if(password != e.target.parentElement.children[1].value || password == ""){
            await inputError([setWrongPass], "Ops, os valores digitados devem ser iguais 😅", setObj)
        }
        else{
            setLoadingAnimation(true);
            setButtonDis(true)
            await axios.post(API + "/changePassword", {userID: atr.userID, newPassword: password})
                .then(resposta => {
                    e.target.innerHTML = "Senha alterada 😉"
                    e.target.parentElement.children[1].value = ""
                    e.target.parentElement.children[2].value = ""
                })
                .catch(response => {console.log(response.response.status)})
            setButtonDis(false)
            setLoadingAnimation(false)
        }
    }
    return(
        <SectionDiv $display={atr.openConfig}>
            <PaddingDiv>
                <Title>Configurações</Title>
                <ChangePasswordDiv $wrong={wrongPass} $disabled={buttonDis} $loading={loadingAnimation}>
                    <DivTitle>Alterar senha</DivTitle>
                    <input type="password" placeholder="Digite sua nova senha"></input>
                    <input type="password" placeholder="Só mais uma vez"></input>
                    <button onClick={(e) => changePass(e)}>Alterar senha</button>
                </ChangePasswordDiv>
                <button onClick={() => atr.setBlockBackChange(true)}>Desabilitar mudança de fundo</button>
            </PaddingDiv>
        </SectionDiv>
    )
}