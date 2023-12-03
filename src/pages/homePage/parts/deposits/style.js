import styled from "styled-components"
import { colorMain, colorSecundary, fontSizeMedium, fontSizeSmall, transitionSlow } from "../../../../visualValues"

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
    top: ${atr => atr.$display ? "0vh" : "-100vh"}
`
export const Title = styled.div`
    font-size: ${fontSizeMedium};
    color: rgb(255, 255, 255);
`
export const BankData = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    padding: 0px 0px 0px 10px;
    margin: 10px 0px 0px 0px;

    font-size: ${fontSizeSmall};
    color: rgb(255, 255, 255);

    div{
        margin: 0px 0px 10px 0px;
    }
`