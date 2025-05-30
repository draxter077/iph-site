import head from "./head/main.js"
import body from "./body/main.js"

export default function admin(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            padding:10px 40px;
        }
        :responsive{padding:10px;}`

    const admin = cE("div", style)
    admin.appendChild(head())

    admin.children[0].children[2].addEventListener(
        "keypress",
        async function a(e){
            if(e.key == "Enter"){
                admin.children[0].children[2].removeEventListener("keypress", a)
                let id = admin.children[0].children[1].value, pass = admin.children[0].children[2].value
                await axios.post(`${apiURL}/admin/post/adminLog`,{id:id,password:pass})
                    .then(r => {
                        admin.appendChild(body(r.data))
                        admin.children[1].style.maxHeight = "1000px"
                    })
                    .catch(r => alert(r.response.status))
            }
        }
    )
    return(admin)
}