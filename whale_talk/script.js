
const input = 'omnia mea mecum porto';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []; 

for(let i = 0 ; i < input.length; i++){ //iterate through the input array
 	for(let j = 0; j < vowels.length; j++){ //iterate through the vowels array
    if(input[i] === vowels[j]){
       resultArray.push(input[i]);
    }
  }
  if(input[i] === 'e' || input[i] === 'u'){
     resultArray.push(input[i]); //double 'e' and/or 'u'; this statements belongs in the outer for-loop because we only want to perform this check once for every letter in the original input
  }
}

console.log(resultArray.join('').toUpperCase());