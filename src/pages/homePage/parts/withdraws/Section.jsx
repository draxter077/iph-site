import axios from "axios"
import { API } from "../../../../variablesValues.js"
import { SectionDiv, Title, Info, InputSection, Button } from "./style.js"

import { inputError } from "../../../generalFunctions/windowsRelated.js"
import { hasLetters } from "../../../generalFunctions/stringRelated.js"
import { useState } from "react"

export default function WithDraws(atr){
    const [wrongValue, setWrongValue] = useState(false)
    const [buttonDis, setButtonDis] = useState(false)
    const [loadingAnimation, setLoadingAnimation] = useState(false)
    const pixKey = atr.pix

    const setObj = {setButtonDis: setButtonDis, 
        setAlertText: atr.setAlertText, 
        setShowAlert: atr.setShowAlert, 
        setLoadingAnimation: setLoadingAnimation}

    async function withdrawRequest(e){
        let value = e.target.parentElement.children[0].value
        if(hasLetters(value) || value.length == 0){
            await inputError([setWrongValue], "Ops, digite um valor numérico para retirar :)", setObj)
        }
        else{
            setLoadingAnimation(true);
            setButtonDis(true)
            value = value.replaceAll(",", ".")
            value = Number(value)
            await axios.post(API + "/withdraw", {userID: atr.userID, value: value})
                .then(resposta => {
                    e.target.parentElement.children[0].value = "Retirada efetuada 😉"
                    setButtonDis(false)
                    setLoadingAnimation(false)
                })
                .catch(async response => {
                    if(response.response.status == 422){
                        await inputError([setWrongValue], "Ops, digite um valor inferior ou igual ao seu saldo disponível :)", setObj)
                    }
                })
        }
    }
    return(
    <SectionDiv $display={atr.showWithdraws}>
        <Title>Nova retirada</Title>
        <Info>
            <div>Devido à natureza das contas, pode levar até 24h úteis para a retirada ser efetivada 🕔</div>
            <div>A chave Pix cadastrada é {pixKey}</div>
            <InputSection $wrong={wrongValue}  $loading={loadingAnimation} $disabled={buttonDis}>
                <input placeholder="Digite o valor (ex: 1234,56)"></input>
                <button onClick={(e) => withdrawRequest(e)}>Retirar</button>
            </InputSection>
        </Info>
        <Button><button onClick={() => atr.setShowWithdraws(false)}>Fechar</button></Button>
    </SectionDiv>       
    )
}