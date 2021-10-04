let n=0
function power(number){
   while (2**n<number) n++;
    return 2**n;
}
console.log(power(1010))
