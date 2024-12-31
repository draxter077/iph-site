import option from "./option/main.js"

export default function toChange(data){
    const toChange = cE("div", undefined)

    const tosChange = [{type: "email", current: data.email, title: "Alterar email", input: "Novo email"},
        {type: "pix", current: data.pix, title: "Alterar pix", input: "Novo pix"},
        {type: "password", current: protect(data.password), title: "Alterar senha", input: "Nova senha"}
        ]
    
    for(let i = 0; i < tosChange.length; i++){
        toChange.appendChild(option(tosChange[i]))
    }

    return(toChange)
}

function protect(s){
    let ns = ""
    for(let i = 0; i < s.length; i++){
        if(i != s.length - 1 && i != 0){
            ns += "*"
        }
        else{
            ns += s[i]
        }
    }
    return(ns)
}
