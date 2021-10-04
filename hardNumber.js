function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    if (n === 1) return false
    else return true
}

function hardNum(n){
    let strnumber=n.toString();
    let m =strnumber.length;
    for (let i=0 ; i<m;i++){
        if (!isPrime(Number(strnumber.substring(0,m-1)))){
        return false;
        }
    }
    return true

}
function hardPass(n){
    for (let i=10**(n-1);i<10**n;i++){
        if(hardNum(i)){
            console.log(i)
        }
    }
}
hardPass(52)