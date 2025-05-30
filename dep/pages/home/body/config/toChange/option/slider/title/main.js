export default function title(t){
    let style = `
        {
            width: 100%;
            height: 100%;
            font-size: 20px;
            font-weight: 600;
            cursor: pointer;
        }`
    let title = cE("div", style)
    title.onclick = slide
    title.innerHTML = t
    return(title)
}

function slide(Event){
    Event.target.parentElement.style.translate = "-50%"
}