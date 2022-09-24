let dieRoll;
let count = 0;
let dieRollMap = new Map();
for(n=1;n<7;n++){
    dieRollMap.set(n,0);
}
while(count!=10 || count==0){
    dieRoll = Math.floor(Math.random()*6)+1;
    count = dieRollMap.get(dieRoll) + 1;
    dieRollMap.set(dieRoll,count);
}
let min = dieRollMap.get(1);
let keyNum = 1;
for (const [key, value] of dieRollMap.entries()) {
    if(value<min){
        min = value; 
        keyNum = key;
    }
    if(value==10){
        console.log('Number with max times is: ' + key + ' = ' + value + ' times')
    }
}
console.log('Number with minimum times is : ' + keyNum + ' = ' + min + ' times')