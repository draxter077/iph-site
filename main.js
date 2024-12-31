import construct from "./pages/construct.js"

window.cE = function cE(t, stl){
    function addClass(){
        function randomName(names){
            const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
                            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            let name = ""
            while(true){
                for(let k = 0; k < 5; k++){
                    let n = Math.floor((chars.length)*Math.random())
                    name += chars[n]
                }
                for(let l = 0; l < names.length; l++){
                    if(name == names[l]){
                        name = ""
                        break
                    }
                }
                if(name != ""){
                    break
                }
            }
            return(name)
        }

        // Formata os styles já adicionados à tag style
        let stylesTag = document.getElementsByTagName("style")[0].innerHTML
        let styles = stylesTag
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .split("}") // Retorna array com elementos do tipo .nome{atr: value,...

        let stylesGotten = stl.split("}") // Retorna array com elementos do tipo {atr: value,...
        stl = stylesGotten[0] + "}" // O primeiro estilo tem a chave fechada
        let style = stylesGotten[0]
                        .replaceAll("\n", "")
                        .replaceAll("  ", "")
                        .replace("{", "")
                        .replace("}", "")
                        .split(";") // Retorna uma array com elementos 'atr: value', ....
        let stylesNames = []
        let stylesNamesObject = []
        let styleAtr = []
        for(let i = 0; i < styles.length; i++){
            let s = styles[i].split("{") // Divide em nome e atributos os estilos da tag
            let n = s[0]
            let b = s[1]
            if(n[0] == "."){
                stylesNames.push(n) // adiciona a uma lista de nomes de estilos já criados se não for um estilo de tag html
            }
            if(b != undefined && b != ""){
                let bs = b.split(";")
                let atrValues = []
                for(let j = 0; j < bs.length; j++){
                    let ats = bs[j].split(": ")
                    if(ats[0] != undefined && ats[0] != ""){
                        atrValues.push([ats[0], ats[1]])
                    }
                }
                stylesNamesObject.push([n, atrValues]) // Adiciona a uma lista de estilos o nome e sua lista de atributos, formatada acima
            }
        }
        for(let j = 0; j < style.length; j++){
            let s = style[j].split(": ")
            if (s[0] != ""){
                styleAtr.push([s[0], s[1]]) // Cria uma lista com os atributos do estilo fornecido
            }
        }
        
        let className = ""
        for(let k = 0; k < stylesNamesObject.length; k++){ // Para cada estilo já criado, verifica se pode reutilizar o nome
            let sN = stylesNamesObject[k]
            let es = 0;
            for(let l = 0; l < sN[1].length; l++){
                let atrN = sN[1][l][0]
                let atrA = sN[1][l][1]
                for(let m = 0; m < styleAtr.length; m++){
                    if(styleAtr[m][0] == atrN && styleAtr[m][1] == atrA){
                        es += 1
                        break
                        }
                }
            }   
            if(es == styleAtr.length && es == sN[1].length){
                className = sN[0].replace(".", "")
                break
            }
        }
        if(className == ""){
            className = randomName(stylesNames)
            document.getElementsByTagName("style")[0].innerHTML += `.${className}${stl.replaceAll("\n", "").replaceAll("  ","")}`
            for(let p = 1; p < stylesGotten.length; p++){
                let inst = stylesGotten[p]
                let insN = inst.split("{")[0].replaceAll("\n", "").replaceAll("  ", "")
                let insA = inst.split("{")[1]
                if(insN == ":responsive"){
                    document.getElementsByTagName("style")[0].innerHTML += `@media screen and (max-width: 1000px){.${className}{${insA.replaceAll("\n", "").replaceAll("  ","")}}}`
                }
                else if(insN != undefined && insN != ""){
                    document.getElementsByTagName("style")[0].innerHTML += `.${className}${insN}{${insA.replaceAll("\n", "").replaceAll("  ","")}}`
                }
            }
        }
        return(className)
    }

    const el = document.createElement(t)
    if(stl != undefined){
        el.className = addClass()
    }
    return(el)
}

axios.defaults.headers.common["ngrok-skip-browser-warning"] = "69420"
document.getElementsByTagName("head")[0].appendChild(document.createElement("style"))
construct()