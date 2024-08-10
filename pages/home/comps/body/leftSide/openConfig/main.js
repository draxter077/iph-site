export default function openConfig(){
    return(`
        <div class="homeBodyLeftSideOpenConfig">
            <div>
                Configurações
            </div>
        </div>     
    `)
}

export function openConfigDiv(){
    document.getElementsByClassName("homeBodyConfig")[0].style.left = "0%";
    document.getElementsByClassName("homeBody")[0].style = "opacity: 0.5 !important;";
    document.getElementsByClassName("homeBodyConfig")[0].scrollIntoView({behavior: "smooth"})
}