import styled from "styled-components"
import { backChangeTime, colorDarkBlue, colorSoftBlue } from "../../../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    @keyframes changeBack{
        0% {background: ${colorDarkBlue}}
        100% {background: ${colorSoftBlue}}
    }

    width: 100%;
    height: 100%;
    padding: 20px 70px;

    background: ${colorDarkBlue};

    animation: changeBack ${atr => atr.blockBack ? "0s" : backChangeTime} infinite alternate linear;

    display: flex;
    flex-direction: column;
    align-items: center;
`