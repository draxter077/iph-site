import styled from "styled-components"
import { colorMain, colorSecundary, fontSizeMedium, fontSizeSmall, transitionMedium } from "../../../../../visualValues"

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
`
export const Title = styled.div`
    font-size: ${fontSizeMedium};
    color: ${colorSecundary};
    font-weight: 700;
`

export const DivTitle = styled.div`
    font-size: ${fontSizeSmall};
    color: ${colorSecundary};
    font-weight: 700;
    margin: 0px 0px 10px 0px;
    padding: 0px 0px 0px 5px;
`

export const ChangePasswordDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 20px 0px 0px 0px;
    padding: 10px;
    border: solid 1px ${colorMain};
    border-radius: 10px;

    input{
        font-size: ${fontSizeSmall};
        margin: 0px 0px 10px 0px;
    }
`