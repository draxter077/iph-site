import title from "./title/main.js"
import forms from "./forms/main.js"

export default function slider(data){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px 15px;
            translate: 0%;
            transition: translate var(--transitionTime);
            width: 200%;
        }`
    const slider = cE("div", style)
    slider.appendChild(title(data.title))
    slider.appendChild(forms(data))
    return(slider)
}