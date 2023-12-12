import styled from "styled-components"
import { transitionMedium, colorSecundary, fontSizeMedium, fontSizeSmall, transitionSlow } from "../../../../visualValues"

export const SectionDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;

    padding: 20px;

    box-shadow: 0px 0px 10px 1px rgb(0, 0, 0);
    background: ${colorSecundary};

    transition: top ${transitionSlow} linear;

    position: fixed;
    z-index: 1;
    top: ${atr => atr.$display ? "0vh" : "-100vh"};
`
export const Title = styled.div`
    font-size: ${fontSizeMedium};
    color: rgb(255, 255, 255);
    margin: 0px 0px 20px 0px;
    font-weight: 700;
`
export const Info = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    font-size: ${fontSizeSmall};
    line-height: 1.2;
`
export const BankData = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    font-weight: 600;
    line-height: 1.4;
`
export const InputSection = styled.div`
    @keyframes wrongInput{
        0% {box-shadow: none}
        100% {box-shadow: 0px 0px 5px 0px rgb(255, 0, 0)}
    }

    @keyframes loading{
        0% {box-shadow: none}
        100% {box-shadow: 0px 0px 15px 3px ${colorSecundary}}
    }   


    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 20px 0px 0px 0px;

    input{
        width: 15%;
        font-size: ${fontSizeSmall};
        animation: ${atr => atr.$wrong ? `wrongInput ${transitionMedium} 2 alternate linear;` : "none"}, ${atr => atr.$loading ? `loading ${transitionSlow} infinite alternate linear;` : "none"};
    }
    button{
        margin: 0px 0px 0px 10px;
        height: 100%;
        opacity: ${atr => atr.$disabled ? "0" : "1"};
        transition: opacity ${transitionFast}, background ${transitionMedium};
    }
`
export const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin: 20px 0px 0px 0px;
`