export default function point(x, y, t){
    let style = `
        {
            position:absolute;
            top:${y};
            left:${x};
            width:5px;
            height:5px;
            border-radius:5px;
            background:var(--colorWhite);
        }`

    const point = cE("div", style)
    point.title = t
    return(point)
}