function isPrime(x) {
    for(let i=2;i<x;i++){
        if (x%i===0){
            return false
        }
    }
    if (x===1) return false
    else return true
}
function primeNumber(a,b){
    let x=a;
    let arr=[];
    while (x<b){
        if (isPrime(x)){
            arr.push(x)
        }
        x++;
    }
    return arr;
}
console.log(primeNumber(1,500))


