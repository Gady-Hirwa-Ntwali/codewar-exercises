function countBy(x,n){
  let f = []

   for(let i = 1; i<=n; i++){
    f.push(i*x)
   }
   return f
}
console.log(countBy(2,5))