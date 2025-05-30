export default function qr(brCode){
    let style = `
        {
            width:50%;
        }`

    const qr = cE("img", style)
    qr.src = `https://api.qrserver.com/v1/create-qr-code/?data=${brCode}&amp;size=100x100`
    return(qr)
}