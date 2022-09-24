let birthMonthsMap = new Map();
let individual = 0;
for(m=1;m<=12;m++){
    birthMonthsMap.set(m,0);
}
while(individual<50){
    month = Math.floor(Math.random()*12) + 1;
    count = birthMonthsMap.get(month) + 1;
    birthMonthsMap.set(month,count);
    individual++;
}
for (const [key, value] of birthMonthsMap.entries()) {
        console.log('Month ' + key + ' = ' + value + ' Individuals');
}