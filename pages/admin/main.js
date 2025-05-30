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
                    .catch(r => console.log(r.response))
                
                let data = [
                    {
                        id:"1234",
                        name:"Name Surname1 Surname2",
                        email:"Name@gmail.com",
                        pix:"algumaChave",
                        movs:[{date:"01/01/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/01/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/01/2025", type:"Lucro", value:50, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/02/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/02/2025", type:"Lucro", value:200, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/03/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/03/2025", type:"Lucro", value:200, status:0}
                        ]
                    },
                    {
                        id:"2345",
                        name:"Name Surname1 Surname2",
                        email:"Name@gmail.com",
                        pix:"algumaChave",
                        movs:[{date:"01/01/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/01/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/01/2025", type:"Lucro", value:50, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/02/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/02/2025", type:"Lucro", value:200, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/03/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/03/2025", type:"Lucro", value:200, status:1}
                        ]
                    },
                    {
                        id:"3456",
                        name:"Name Surname1 Surname2",
                        email:"Name@gmail.com",
                        pix:"algumaChave",
                        movs:[{date:"01/01/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/01/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/01/2025", type:"Lucro", value:50, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/02/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/02/2025", type:"Lucro", value:200, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/03/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/03/2025", type:"Lucro", value:200, status:1}
                        ]
                    },
                    {
                        id:"4567",
                        name:"Name Surname1 Surname2",
                        email:"Name@gmail.com",
                        pix:"algumaChave",
                        movs:[{date:"01/01/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/01/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/01/2025", type:"Lucro", value:50, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/02/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/02/2025", type:"Lucro", value:200, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/03/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/03/2025", type:"Lucro", value:200, status:1}
                        ]
                    },
                    {
                        id:"5678",
                        name:"Name Surname1 Surname2",
                        email:"Name@gmail.com",
                        pix:"algumaChave",
                        movs:[{date:"01/01/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/01/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/01/2025", type:"Lucro", value:50, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/02/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/02/2025", type:"Lucro", value:200, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/03/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/03/2025", type:"Lucro", value:200, status:1}
                        ]
                    },
                    {
                        id:"6789",
                        name:"Name Surname1 Surname2",
                        email:"Name@gmail.com",
                        pix:"algumaChave",
                        movs:[{date:"01/01/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/01/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/01/2025", type:"Lucro", value:50, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/02/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/02/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/02/2025", type:"Lucro", value:200, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-300, status:1},
                            {date:"01/03/2025", type:"Depósito", value:1250, status:1},
                            {date:"01/03/2025", type:"Retirada", value:-1000, status:1},
                            {date:"31/03/2025", type:"Lucro", value:200, status:1}
                        ]
                    }
                ]
                admin.appendChild(body(data))
                admin.children[1].style.maxHeight = "1000px"
            }
        }
    )
    return(admin)
}