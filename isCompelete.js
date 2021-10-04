function isCompelete(n){
 let b = 0;
 for (let i=1;i<n;i++){
     if (n % i ===0){
         b+=i
     }
 }

 return(b===n)
    
 if (b===n)
     console.log("yes")
    else
        console.log("no")

}
for (let i=1;i<2000;i++){
    if (isCompelete(i)){
    console.log(i)}
}