import styled from "styled-components"
import { fontSizeMedium, fontSizeMediumLarge, webkitStyle } from "../../../../visualValues"

export const InformacoesDetalhadas = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: 440px;
    margin: 30px 0px 0px 0px;

    @media (max-width: 1080px){
        flex-direction: column;
        height: 600px;
    }
`
export const InfoDet = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: rgb(255, 255, 255);

    padding: 20px;
    border-radius: 5px;

    width: 22%;
    height: 100%;

    @media (max-width: 1080px){
        width: 100%;
        height: 100%;
        margin: 0px 0px 10px 0px;
    }
`
export const Dets = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const Titulo = styled.div`
    font-size: ${fontSizeMediumLarge};
    margin: 0px 0px 20px 0px;
`
export const Linhas = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: auto;
    height: 100%;

    overflow: scroll;
    ${webkitStyle}
`
export const Linha = styled.div`
    box-sizing: border-box;
    width: 100%;
    border-top: 1px solid rgb(0, 0, 0);
    padding: 8px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: ${fontSizeMedium};
`