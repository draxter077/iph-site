export default function openConfig(){
    return(`
        <div class="homeBodyLeftSideOpenConfigDiv">
            <div class="homeBodyLeftSideOpenConfigTitle">
                Configurações
            </div>
        </div>     
    `)
}

export function openConfigDiv(){
    document.getElementsByClassName("homeBodyConfigDiv")[0].style.left = "0%";
    document.getElementsByClassName("homeBodyContent")[0].style = "opacity: 0.5 !important;";
    document.getElementsByClassName("homeBodyConfigDiv")[0].scrollIntoView({behavior: "smooth"})
}