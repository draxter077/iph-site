import { SectionDiv, Input } from "./style.js"

import { inputError } from "../../../generalFunctions/windowsRelated.js"
import { sleep } from "../../../generalFunctions/numberRelated.js"
import { API, homeURL } from "../../../../variablesValues.js"

import axios from "axios"

export function AcessContainer(atr){
    const setObj = {setButtonDis: atr.setButtonDis, 
        setAlertText: atr.setAlertText, 
        setShowAlert: atr.setShowAlert, 
        setLoadingAnimation: atr.setLoadingAnimation}

    async function changeWindow(){
        atr.setTransitionChange(true); 
        await sleep(1000);
        atr.navigate(homeURL);
    }

    async function logIn(e){
        let userEmail = e.target.parentElement.children[0].children[1].value
        let userPassword = e.target.parentElement.children[0].children[2].value
        if(userEmail.length == 0 || userPassword.length == 0){
            await inputError([atr.setWrongEmail, atr.setWrongPass], "Ops, você esqueceu de completar todos os campos :)", setObj)
        }
        else if(!(isEmail(userEmail))){
            await inputError([atr.setWrongEmail], "Ops, preencha o email corretamente :)", setObj)
        }
        else{
            atr.setLoadingAnimation(true);
            atr.setButtonDis(true)
            let logObj = {email: userEmail, password: userPassword};
            await axios.post(API + "/login", logObj)
                .then(resposta => {localStorage.setItem("investerUser", JSON.stringify(resposta.data)); changeWindow()})
                .catch(async response => {
                    if (response.code == "ERR_NETWORK"){
                        await inputError([], "Ops, não consegui me conectar ao servidor :(", setObj)
                    }
                    else if(response.response.status == 402){
                        await inputError([setWrongEmail], "Ops, não consegui encontrar seu email :(", setObj)
                    }
                    else if(response.response.status == 401){
                        await inputError([setWrongPass], "Ops, a senha está errada :(", setObj)
                    }
                })
        }
        
    }

    async function signUp(e){
        let userName = e.target.parentElement.children[0].children[0].value
        let userEmail = e.target.parentElement.children[0].children[1].value
        let userPassword = e.target.parentElement.children[0].children[2].value
        let userConfPassword = e.target.parentElement.children[0].children[3].value
        if(userName.length == 0 || userEmail.length == 0 || userPassword.length == 0 || userConfPassword.length == 0){
            await inputError([atr.setWrongName, atr.setWrongEmail, atr.setWrongPass, atr.setWrongConfPass], "Ops, você esqueceu de completar todos os campos :)", setObj)
        }
        else if(!(isEmail(userEmail))){
            await inputError([atr.setWrongEmail], "Ops, preencha o email corretamente :)", setObj)
        }
        else if(userPassword != userConfPassword){
            await inputError([atr.setWrongConfPass], "Ops, as senhas devem ser iguais :)", setObj)
        }
        else{
            atr.setLoadingAnimation(true);
            atr.setButtonDis(true)
            let logObj = {name: names(userName), email: userEmail, password: userPassword};
            await axios.post(API + "/signup", logObj)
                .then(resposta => {localStorage.setItem("investerUser", JSON.stringify(resposta.data)); changeWindow()})
                .catch(async response => {
                    if (response.code == "ERR_NETWORK"){
                        await inputError([], "Ops, não consegui me conectar ao servidor :(", setObj)
                    }
                    else if(response.response.status == 409){
                        await inputError([atr.setWrongEmail], "Ops, esse email já está vinculado a uma conta :(", setObj)
                    }
                })
        }
    }

    return(
        <SectionDiv $loading={atr.loadingAnimation} $disabled={atr.buttonDis}>
            {atr.openSignUp ? "Crie uma conta" : "Entre na sua conta"}
            <div>
                <Input placeholder="Nome" $display={atr.openSignUp} $wrong={atr.wrongName}></Input>
                <Input placeholder="Email" $display={true} $wrong={atr.wrongEmail}></Input>
                <Input type="password" placeholder="Senha" $display={true} $wrong={atr.wrongPass}></Input>
                <Input type="password" placeholder="Confirme sua senha" $display={atr.openSignUp} $wrong={atr.wrongConfPass}></Input>
            </div>
            <button onClick={atr.openSignUp ? (e) => signUp(e) : (e) => logIn(e)}>{atr.openSignUp ? "Criar" : "Entrar"}</button>
        </SectionDiv>
    )
}