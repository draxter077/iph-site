export const colorMain = "rgb(0, 150, 250)";
export const colorSoftMain = "rgb(10, 186, 255)";
export const colorSecundary = "rgb(250, 150, 0)";

export const fontSizeLarge = "100px";
export const fontSizeMedium = "28px";
export const fontSizeSmall = "17px";

export const transitionFast = "0.4s";
export const transitionMedium = "0.6s"
export const transitionSlow = "1s";

export const backChangeTime = "3s";

export const webkitStyle = `
::-webkit-scrollbar{
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-track{
    background: rgb(255, 255, 255);
}

::-webkit-scrollbar-thumb{
    background-color: ${colorMain};
    border-radius: 20px;
    border: 4px solid rgb(255, 255, 255);
}

::-webkit-scrollbar-button{
    height: 0px;
    padding: none;
    margin: none;
}`