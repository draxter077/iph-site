import styled from "styled-components"
import { colorMain, colorSecundary, fontSizeMedium, fontSizeSmall, transitionFast, transitionMedium, transitionSlow } from "../../../../../visualValues"

export const SectionDiv = styled.div`
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    width: 100%;
    max-height: ${atr => atr.$display ? "500px" : "0px"};
    border-radius: 5px;
    margin: 30px 0px 0px;
    overflow: hidden;

    transition: max-height ${transitionMedium} linear;
`
export const PaddingDiv = styled.div`
    box-sizing: border-box;
    padding: 20px;

    button{
        margin: 20px 0px 0px 0px;
    }
`
export const Title = styled.div`
    font-size: ${fontSizeMedium};
    color: ${colorSecundary};
    font-weight: 700;
`

export const LineConfig = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
`
export const DivTitle = styled.div`
    font-size: ${fontSizeSmall};
    color: ${colorSecundary};
    font-weight: 700;
    margin: 0px 0px 10px 0px;
    padding: 0px 0px 0px 5px;
`

export const ChangeDiv = styled.div`
    @keyframes wrongInput{
        0% {box-shadow: none}
        100% {box-shadow: 0px 0px 5px 0px rgb(255, 0, 0)}
    }
    @keyframes loading{
        0% {box-shadow: none}
        100% {box-shadow: 0px 0px 15px 3px ${colorSecundary}}
    }  

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 20px 20px 0px 0px;
    padding: 10px;
    border: solid 1px ${colorMain};
    border-radius: 10px;

    input{
        font-size: ${fontSizeSmall};
        margin: 0px 0px 10px 0px;
        animation: ${atr => atr.$wrong ? `wrongInput ${transitionMedium} 2 alternate linear;` : "none"}, ${atr => atr.$loading ? `loading ${transitionSlow} infinite alternate linear;` : "none"};
    }

    button{
        opacity: ${atr => atr.$disabled ? "0" : "1"};
        transition: opacity ${transitionFast}, background ${transitionMedium};
    }
`