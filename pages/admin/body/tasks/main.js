import task from "./task/main.js"

export default function tasks(data){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:fit-content;
            height:150px;
            overflow-y:scroll;
            margin:20px 0px 0px 0px;
            padding:10px;
            border-right:1px solid var(--colorGreen);
            border-left:1px solid var(--colorGreen);
        }
        :responsive{
            width:95%;
        }`

    const tasks = cE("div", style)
    tasks.id = "tasks"
    for(let i = 0; i < data.length; i++){
        let d = data[i]
        let ms = d.movs
        for(let j = 0; j < ms.length; j++){
            let m = ms[j]
            if(m.status == 0){
                tasks.appendChild(task(`${m.id} - ${m.type} de ${m.value} para ${m.type == "Depósito" ? d.name : d.pix}`, m.id))
            }
        }
    }
    return(tasks)
}