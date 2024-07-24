import { contentDivStyle, logoStyle, formsDivStyle, titleFormsDivStyle, inputStyle } from "./style.js"

export default function bodyDiv(){
    const inputs = ["Nome", "Email", "Senha"]
    return(`
        <div style="${contentDivStyle}">
            <div style="${logoStyle}">iPH</div>
            <div style="${formsDivStyle}">
                <div style="${titleFormsDivStyle}">Criar conta</div>
                <div style="display: flex; flex-direction: column;">
                    ${inputs.map(i => `<input style="${inputStyle}" placeholder="${i}" onmouseover="this.style.boxShadow = '0px 0px 10px 0px rgb(0, 255, 150)'" onmouseout="this.style.boxShadow = '0px 0px 0px 0px rgb(0, 255, 150)'">`).join("")}
                </div>
                <button>Entrar</button>
            </div>
        </div>
    `)
}