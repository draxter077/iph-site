import styled from "styled-components"
import { fontSizeSmall } from "../../../../visualValues"

export const SectionDiv = styled.div`
    display: ${atr => atr.userID == '1' ? "flex" : "none"};
    flex-direction: row;
    align-items: flex-start;
    width: 100%;

    margin: 10px 0px 0px 0px;

    input{
        font-size: ${fontSizeSmall};
    }
`