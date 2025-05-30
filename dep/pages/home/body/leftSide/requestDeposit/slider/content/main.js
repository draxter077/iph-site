export default function content(){
    let style = `
        {
            width: 50%;
            text-align: right;
            font-size: 18px;
            color: var(--colorBlack);
        }`
    const content = cE("div", style)
    content.innerHTML = `Para depósitos, utilize a chave pix <span style="font-weight: 600">i@ph.net.br</span>`
    return(content)
}