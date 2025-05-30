export default function box(){
    let style = `
        {
            width:70%;
            border-top:1px solid var(--colorGreen);
            border-bottom:1px solid var(--colorGreen);
            margin:5px 0px 20px 0px;
            padding:10px 15px;
            color:var(--colorWhite);
            font-size:15px;
        }
        >span{
            color:var(--colorGreen);
            user-select:all;
        }
        :responsive{
            width:95%;
            font-size:12px;
        }`

    const box = cE("div", style)
    box.innerHTML = `Quaisquer dúvidas, entre em contato pelo email <span>i@ph.net.br</span>`
    return(box)
}