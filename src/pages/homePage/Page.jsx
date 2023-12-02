import { HelpScreen } from "./parts/help/Help.jsx"
import { Ptopo } from "./parts/topo/Ptopo.jsx"
import { Background } from "./parts/structureParts/background.js"
import { PconfigDiv } from "./parts/structureParts/configDiv/PconfigDiv.jsx"
import { InformacoesBasicas } from "./parts/infoBas/Section.jsx"
import { InformacoesDetalhadas } from "./parts/infoDet/Section.jsx"

import TransitionScreen from "../transitionScreen/Page.jsx"

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { API } from "../../variablesValues.js"

export default function StartPage(){
    const navigate = useNavigate()
    const [openConfig, setOpenConfig] = useState(false);
    const [blockBackChange, setBlockBackChange] = useState(false);
    const [transitionChange, setTransitionChange] = useState(true);
    const [showHelp, setShowHelp] = useState(false);
    const [infoBas, setInfoBas] = useState([]);
    const [infoDet, setInfoDet] = useState([]);
    const [transitionText, setTransitionText] = useState("");

    const userID = JSON.parse(localStorage.getItem("investerUser"))

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    async function changeTrans(){
        await sleep(1000);
        setTransitionChange(false);
    }

    async function changeWindow(){
        setTransitionText("Até mais! :)")
        setTransitionChange(true);
        await sleep(1000);
        navigate("/");
    }

    useEffect(() => {
        axios.post(API + "/home", userID)
            .then(resposta => {
                console.log(resposta);
                setTransitionText("Olá, " + resposta.data.userLog.userName + " :)");
                setInfoBas(resposta.data.infoBas)
                setInfoDet(resposta.data.infoDet)
                changeTrans()})
            .catch(response => {setTransitionText("Desculpe! Não consegui me conectar à base de dados :("); console.log(response)})
        }, []
    );

    return(
        <>
        <TransitionScreen $display={transitionChange} text={transitionText}/>
        <HelpScreen $display={showHelp} setFunc={setShowHelp}/>

        <Background blockBack={blockBackChange}>
            <Ptopo changeWindow={changeWindow} setOpenConfig={setOpenConfig} setShowHelp={setShowHelp}/>

            <PconfigDiv openConfig={openConfig} setBlockBackChange={setBlockBackChange}/>
                
            <InformacoesBasicas infoBas={infoBas}/>

            <InformacoesDetalhadas infoDet={infoDet}/>
        </Background>
        </>
    )
}