const fs = require("fs");

const text = fs.readFileSync("./Inputs/day2Input.txt").toString('utf-8');
const textByLine = text.split("\r\n");

// A is rock
// B is paper
// c is scissors

// x is rock
// y is paper
// z is scissors

// 1 pt for rock
// 2 for paper
// 3 scissors

// 0 for loss
// 3 for tie
// 6 for win 

// A Y
// B X
// C Z

// Part 1
const resultsMap = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6
}
let totalScore = 0;
for(let i=0; i<textByLine.length;i++){
    //console.log(resultsMap[textByLine[i]])
    totalScore += resultsMap[textByLine[i]];
}

console.log('total score after full run ', totalScore)

// x means need to lose
// y means need to draw 
// z means need to win 

// Part 2 
const resultsMap2 = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7
}
let totalScore2 = 0;
for(let i=0; i<textByLine.length;i++){
    //console.log(resultsMap[textByLine[i]])
    totalScore2 += resultsMap2[textByLine[i]];
}

console.log('total score after full run2 ', totalScore2)
