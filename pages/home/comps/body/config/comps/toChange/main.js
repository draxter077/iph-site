export default function toChange(){
    const toChange = [{title: "Alterar email", input: "Novo email"},
        {title: "Alterar pix", input: "Novo pix"},
        {title: "Alterar senha", input: "Nova senha"}
        ]
    return(
        `${toChange.map(t =>
            `<div class="homeBodyConfigChange">
                <div>
                    <div class="homeBodyConfigChangeTitle">
                        ${t.title}
                    </div>
                    <div class="homeBodyConfigChangeForms">
                        <input placeholder="${t.input}">
                        <button>Alterar</button>
                    </div>
                </div>
            </div>`
        ).join("")}
    `)
}