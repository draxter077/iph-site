import account from "./account/main.js"

export default function accounts(data, caps, rents){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:fit-content;
            height:210px;
            border-left:1px solid var(--colorGreen);
            border-right:1px solid var(--colorGreen);
            padding:10px;
            overflow-y:scroll;
        }
        :responsive{
            width:95%;
        }`
    
    const accounts = cE("div", style)
    for(let i = 0; i < data.length; i++){
        let d = data[i]
        let dCapital = 0
        let dRents = []
        for(let j = 0; j < caps.length; j++){
            if(caps[j].id == d.id){dCapital = caps[j].capital;break}
        }
        for(let k = 0; k < rents.length; k++){
            if(rents[k].id == d.id){dRents = rents[k].rents}
        }
        accounts.appendChild(account(d, dCapital, dRents))
    }
    return(accounts)
}