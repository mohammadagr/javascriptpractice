function isPrime(a){
    if (a===2)  return true
    if (a===1) return false
    for(let i=2;i<=((a/2)+1);i++){
        if (a%i===0) return false
    }
    return true
}
function isHard(i) {
    let iCopy = i;
    while (isPrime(iCopy)){
        iCopy=(iCopy-iCopy%10)/10
        if (iCopy<=10){
            if (isPrime(iCopy)) return true;
        }
    }
    return false

}
let n=3
let num=10**(n-1)
let maxLim=(10**n)
for (num;num<maxLim;num++){
   if(isHard(num)) console.log(num)
}