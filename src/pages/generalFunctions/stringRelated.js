export function isEmail(email){
    let before = email;
    let after = email.replaceAll("@")
    if(before == after){
        return false
    }
    else{
        return true
    }
}

export function names(string){
    let str;
    string = string.toLowerCase().split(" ")
    for(let i = 0; i < string.length; i++){
        str = string[i][0].toUpperCase()
        for(let j = 1; j < string[i].length; j++){
            str += string[i][j]
        }
        string[i] = str
    }
    return(string.join(" "))
}