import title from "./title/main.js"
import button from "./button/main.js"

export default function task(n, id){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:fit-content;
            font-size:calc(0.5*var(--titleFontSize));
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorWhite);
            padding:5px;
        }`

    const task = cE("div", style)
    task.appendChild(title(n))
    task.appendChild(button(id))
    return(task)
}