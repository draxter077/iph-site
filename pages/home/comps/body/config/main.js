import userInfo from "./comps/userInfo/main.js"
import toChange from "./comps/toChange/main.js"

export default function configDiv(data){
    return(`
        <div class="homeBodyConfig">
            <div class="homeBodyConfigTitle">
                Olá, ${data.name.split(" ")[0]}
                <button>Fechar</button>
            </div>
            ${userInfo(data)}
            ${toChange()}
            <div class="homeBodyConfigDisclaimer">
                Este site não salva dados no seu navegador, de tal forma que
                você será automaticamente deslogado assim que fechar a aba.
            </div>
        </div>    
    `)
}

export function closeConfigDiv(){
    document.getElementsByClassName("homeBodyConfig")[0].style.left = "-100%";
    document.getElementsByClassName("homeBody")[0].style.opacity = "1";
}