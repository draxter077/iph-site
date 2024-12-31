import title from "./title/main.js"
import toChange from "./toChange/main.js"
import disclaimer from "./disclaimer/main.js"

export default function config(data){
    let style = `
        {
            display: flex;
            flex-direction: column;
            position: absolute;
            z-index: 1;
            top: 0%;
            left: -100%;
            width: 30%;
            background: var(--colorWhite);
            border-radius: 20px;
            padding: 20px;
            transition: left var(--transitionTime);
            box-shadow: 0px 0px 20px 5px var(--colorBlack);
        }
        :responsive{
            width: 100%;
        }`
    const config = cE("div", style)
    config.appendChild(title(data))
    config.appendChild(toChange(data))
    config.appendChild(disclaimer())
    return(config)
}