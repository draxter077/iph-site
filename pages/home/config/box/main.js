import title from "./title/main.js"
import changes from "./changes/main.js"
import allocation from "./allocation/main.js"

export default function box(name, email, pix){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:70%;
            margin:5px 0px 20px 0px;
            padding:0px 0px 10px 0px;
            color:var(--colorWhite);
            border-bottom:1px solid var(--colorGreen);
        }
        :responsive{width:95%;}`

    const box = cE("div", style)
    box.appendChild(title(name))
    box.appendChild(changes(email, pix))
    box.appendChild(allocation())
    return(box)
}