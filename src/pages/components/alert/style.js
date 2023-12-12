import styled from "styled-components"
import { fontSizeSmall } from "../../../visualValues.js"

export const ComponentDiv = styled.div`
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

    animation: ${atr => atr.$display ? `changeOpacity 5s 1 linear;` : "none"};
`