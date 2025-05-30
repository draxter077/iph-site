export default function input(){
    let style = `
        {
            font-size:calc(0.6*var(--titleFontSize));
            font-weight:600;
            width:150px;
            color:var(--colorWhite);
        }`

    const input = cE("input", style)
    input.placeholder = "1234.56"
    input.addEventListener(
        "keypress",
        async function a(e){
            if(e.key == "Enter"){
                input.removeEventListener("keypress", a)
                let value = input.value
                await axios.post(`${apiURL}/admin/post/monthEnd`,{value:Number(value.toString().replaceAll(".","").replace(",","."))})
                    .then(r=> alert(`${value} foi adicionado, encerrando o mês`))
                    .catch(r => console.log(r.response))
                input.value = ""
            }
        }
    )
    return(input)
}