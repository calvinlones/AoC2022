const fs = require("fs");

const text = fs.readFileSync("./Inputs/day1Input.txt").toString('utf-8');
const textByLine = text.split("\r\n");

let maxArr = []
let maxSingle = 0
let localTotal = 0
let elf = 0

for(let i=0; i<textByLine.length; i++){
    if(textByLine[i]===''){
        maxArr[elf] = localTotal
        localTotal = 0
        elf++
    } else if(i === textByLine.length - 1) {
        maxArr[elf] = localTotal
    } else {
        localTotal += parseInt(textByLine[i])
    }
    if (localTotal > maxSingle){
        maxSingle = localTotal
    }
}

console.log('final max val ', maxSingle)

maxArr.sort((a,b) => {return b - a})
console.log('total of top3 is ', (maxArr[0] + maxArr[1] + maxArr[2]))


