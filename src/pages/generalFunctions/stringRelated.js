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