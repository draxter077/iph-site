import { Background } from "./styles/background/background.js"
import { Topo, Logo, Topodiv, TopoButton } from "./styles/topo/topo.js"
import { Menu } from "./styles/menu/menu.js"
import { ConfigDiv } from "./styles/menu/config.js"
import { InformacoesBasicas, InfoBas, IBTitle, IBValue } from "./styles/menu/infoBas.js"

import TransitionScreen from "../transitionScreen/Page.jsx"

import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { API } from "../../variablesValues.js"

export default function StartPage(){
    const navigate = useNavigate()
    const [openConfig, setOpenConfig] = useState(false);
    const [blockBackChange, setBlockBackChange] = useState(false);
    const [transitionChange, setTransitionChange] = useState("0vh");
    const [infoBas, setInfoBas] = useState([]);
    const [transitionText, setTransitionText] = useState("");

    const userID = JSON.parse(localStorage.getItem("investerUser"))

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    async function changeTrans(){
        await sleep(1000);
        setTransitionChange("-100vh");
    }

    async function changeWindow(){
        setTransitionText("Até mais! :)")
        setTransitionChange("0vh");
        await sleep(1000);
        navigate("/");
    }

    useEffect(() => {
        axios.post(API + "/home", userID)
            .then(resposta => {
                console.log(resposta);
                setTransitionText("Olá, " + resposta.data.userLog.userName + " :)");
                setInfoBas(resposta.data.infoBas)
                changeTrans()})
            .catch(response => {setTransitionText("Desculpe! Não consegui me conectar à base de dados :("); console.log(response)})
        }, []
    );

    return(
        <>
        <TransitionScreen top={transitionChange} text={transitionText}/>
        <Background blockBack={blockBackChange}>
            <Topo>
                <Logo>inv:PH</Logo>
                <Topodiv>
                    <div>
                        <TopoButton onClick={() => setOpenConfig(!openConfig)}>?</TopoButton>
                    </div>
                    <div>
                        <TopoButton onClick={() => setOpenConfig(!openConfig)}>Configurações</TopoButton>
                    </div>
                    <TopoButton onClick={changeWindow}>Sair</TopoButton>
                </Topodiv>
            </Topo>

            <Menu>
                <ConfigDiv $display={openConfig}>
                    <div>
                        <button onClick={() => setBlockBackChange(!blockBackChange)}>parar fundo</button>
                    </div>
                </ConfigDiv>
                
                <InformacoesBasicas>
                    {infoBas.map(dado =>
                        <InfoBas>
                            <IBTitle>{dado.name}</IBTitle>
                            {dado.change == undefined ? <IBValue $color="none"><div>{dado.value}</div></IBValue> : <IBValue color={dado.change >= 0 ? "rgb(0, 255, 0)" : "rgb(255, 0, 0)"}><div>{dado.value}</div><div>{dado.change >= 0 ? "+" : "-"}{dado.change + "%"}</div></IBValue>}
                        </InfoBas>
                    )}
                </InformacoesBasicas>
            </Menu>
        </Background>
        </>
    )
}