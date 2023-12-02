import styled from "styled-components"
import { fontSizeMedium, fontSizeSmall, webkitStyle } from "../../../../visualValues"

export const SectionDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;

    overflow: auto;
    ${webkitStyle}

    @media (max-width: 1080px){
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
    }
`
export const Info = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    width: fit-content;
    height: fit-content;

    background: rgb(255, 255, 255);

    padding: 15px 18px;
    border-radius: 5px;

    margin: 30px 0px 0px 0px;
`

export const ITitle = styled.div`
    font-size: ${fontSizeSmall};
    margin: 0px 0px 10px 0px;
`

export const IValue = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div:nth-child(1){
        font-size: ${fontSizeMedium};
        color: black;
        margin: 0px 10px 0px 0px;
    }
    div:nth-child(2){
        font-size: ${fontSizeSmall};
        font-weight: 1000;
        color: ${atr => atr.color}
    }
`