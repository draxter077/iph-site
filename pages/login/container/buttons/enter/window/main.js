export default function window(t){
    let style = `
        {
            position:fixed;
            bottom:5%;
            left:2%;
            max-width:20%;
            padding:10px 15px;
            border-radius:15px;
            background:var(--colorWhite);
            opacity:0;
            transition:opacity 0.5s;
        }
        :responsive{
            bottom:1%;
            left:2%;
            max-width:90%;
        }`

    const window = cE("div", style)
    window.innerHTML = t
    return(window)
}