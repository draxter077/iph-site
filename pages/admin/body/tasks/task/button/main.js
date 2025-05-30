export default function button(id){
    let style = `
        {
            position:relative;
            color:var(--colorGreen);
            margin:0px 0px 0px 40px;
            transition:font-weight 0.5s;
        }
        :hover{
            font-weight:900;
        }`

    const button = cE("button", style)
    button.innerHTML = "Concluída"
    button.addEventListener(
        "click",
        async function a(e){
            await axios.post(`${apiURL}/admin/post/approveMov`,{movid:id})
                .then(r => {
                    document.getElementById("tasks").removeChild(e.target.parentElement)
                    alert("Aprovada!")
                })
                .catch(r => console.log(r.response))
        }
    )
    return(button)
}