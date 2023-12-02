import styled from "styled-components"
import { backChangeTime, colorMain, colorSoftMain, colorSecundary, transitionFast, fontSizeSmall } from "../../visualValues"

export const Background = styled.div`
    box-sizing: border-box;

    @keyframes changeBack{
        0% {background: ${colorMain}}
        100% {background: ${colorSoftMain}}
    }

    width: 100vw;
    height: 100vh;

    padding: 20px;

    background: ${colorMain};

    animation: changeBack ${backChangeTime} infinite alternate linear;

    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Button = styled.button`
    padding: 5px 10px;
    margin: 20px 0px 0px 0px;
    border-radius: 5px;

    background: rgb(255, 255, 255);
    color: ${colorMain};

    font-weight: bold;

    transition: color ${transitionFast};

    :hover{
        color: ${colorSecundary}; 
        background: rgb(255, 255, 255);   
    }
`
export const Alert = styled.div`
    @keyframes changeOpacity{
        0%{opacity: 0}
        10%{opacity: 1}
        90%{opacity: 1}
        100%{opacity: 0}
    }
    position: absolute;
    bottom: 10%;
    left: 5%;

    background: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 20px;

    font-size: ${fontSizeSmall};
    font-weight: bold;

    opacity: 0;

    animation: ${atr => atr.$showUp ? `changeOpacity 5s 1 linear;` : "none"};
`