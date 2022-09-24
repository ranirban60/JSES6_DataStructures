const prompts = require("prompt-sync")();
let number  = parseInt(prompts('Enter a number to find the prime factors : '));
let primeFactors =[];
for( i = 2; i<= number; i++) {
    if(number%i == 0) {
        let count = 0;
        for(j=2;j<i;j++){
            if (i%j==0){
                count++;
            }
        }
        if (count==0){
            primeFactors.push(i);
    }
    number/=i;
    }
}
console.log('Prime factors are : ' + primeFactors);
