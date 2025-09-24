// const input1= document.getElementById("1")
// const input2= document.getElementById("2")
// const button= document.getElementById('button')
// const display= document.getElementById("display")
// button.addEventListener('click', ()=>{
// 	if(input1.value>input2.value){
// 		display.innerText= input1.value
// 		console.log(input1)
// 	}
// 	else if(input1.value<input2.value){
// 		display.innerText= input2.value
// 		console.log(input2);
// 	}else{
// 		display.innerText= 0;
// 	}
	
// })


// function sumUnique(arr){
// 	const newArr=[]
// 	for(i of arr){
// 		if(newArr.includes(i)){
// 			continue
// 		}else{
// 			newArr.push(i)
// 		}
// 	}
// 	return newArr.reduce((a, b)=> a+b)
// }
// console.log(sumUnique([1,3,2,4,5,1,2,7]))



const theSentence="I love JavaScript programming"
function reversLongSent(theSentence){
	let newArr=""
	const sentence= theSentence.split(" ")
	for( i of sentence){
		if(i.length>newArr.length){
			newArr=i
		}
	}
	return newArr.split("").reverse().join("")
}
console.log(reversLongSent(theSentence))