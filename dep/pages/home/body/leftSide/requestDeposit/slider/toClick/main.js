export default function toClick(){
    let style = `
        {
            position: absolute;
            top: 0%;
            left: 0%;
            width: 100%;
            height: 100%;
        }`
    const toClick = cE("div", style)
    toClick.onclick = slide
    return(toClick)
}

function slide(Event){
    const slider = Event.target.parentElement
    const nowValue = slider.style.translate
    if(nowValue == "-50%"){
        slider.style.translate = "0%"
    }
    else{
        slider.style.translate = "-50%"
    }
}