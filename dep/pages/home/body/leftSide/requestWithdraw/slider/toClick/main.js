export default function toClick(){
    let style = `
        {
            position: absolute;
            top: 0%;
            left: 0%;
            width: 50%;
            height: 100%;
        }`
    const toClick = cE("div", style)
    toClick.onclick = slide
    return(toClick)
}

async function slide(Event){
    const slider = Event.target.parentElement
    const nowValue = slider.style.translate
    slider.style.translate = "-50%"
    await new Promise(resolve => setTimeout(resolve, 600));
    slider.children[2].children[0].focus()
}