import styled from "styled-components"
import { colorSecundary, transitionSlow } from "../../../../visualValues"

export const Background = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;

    padding: 20px;
    background: ${colorSecundary};

    transition: top ${transitionSlow} linear;

    position: fixed;
    top: ${atr => atr.$display ? "0vh" : "-100vh"}
`