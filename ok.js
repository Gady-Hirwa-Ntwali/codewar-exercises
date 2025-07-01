function minMax(arr){
 const max  = Math.max(...arr)
 const min = Math.min(...arr)
 const newArray = [min, max]
 return  newArray
}
console.log(minMax([1, 2, 3, 4, 5]))
