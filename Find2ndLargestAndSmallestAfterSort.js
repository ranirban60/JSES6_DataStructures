let random;
let randomNum = [];
for(let i = 0; i<10; i++){
    random = Math.floor(Math.random()*900)+100;
    randomNum.push(random);
}
console.log('Before sort: ' + randomNum +'\n');

randomNum.sort();

console.log('After sort: ' + randomNum + '\n');

let secondLargest = randomNum[randomNum.length-2];
let secondSmallest = randomNum[1];

console.log('The 2nd largest and 2nd smallest numbers are: ' + secondLargest + ' and ' + secondSmallest);