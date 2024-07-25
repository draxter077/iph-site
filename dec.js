const a = [{name: "teste"}]
const b = JSON.stringify(a)

const chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const chars2 = chars.reverse()

let newDB = ""
for(let i = 0; i < b.length; i++){
    const ind = chars.indexOf(b[i])
    if(ind < 0){newDB += b[i]}
    else{newDB += chars2[ind]}
}

console.log(newDB)

const d = newDB
newDB = ""
for(let j = 0; j < d.length; j++){
    const ind = chars2.indexOf(d[j])
    if(ind < 0){newDB += d[j]}
    else{newDB += chars[ind]}
}

console.log(newDB)

const c = JSON.parse(newDB)