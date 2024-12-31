import toClick from "./toClick/main.js"
import title from "./title/main.js"
import content from "./content/main.js"

export default function slider(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
            width: 200%;
            padding: 20px 25px;
            background: var(--colorWhite);
            translate: 0%;
            transition: translate var(--transitionTime), color var(--transitionTime);
        }
        :hover{
            color: var(--colorGreen);
        }`
    const slider = cE("div", style)
    slider.appendChild(toClick())
    slider.appendChild(title())
    slider.appendChild(content())
    return(slider)
}