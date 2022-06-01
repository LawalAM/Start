//Question 1.
function sum(a,b){
  return a * b;
}
const arr = [1,2,4,6,8];
const red = arr.reduce(sum)
console.log(red)

let arrSum = function(arr){
  if (arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + arrSum(arr);
  }
};
console.log(arrSum([2,4,6,8,10,12,1]));

function sumArray(arr){
  if (arr.length===0){
    return 0
  }
  else {
    return arr[0] + sumArray(arr.slice(1,))
  }
}
console.log(sumArray([2,4,6,8,10,12,1]))



//End of Question 1.

//Question 2
const V =function(arr,b){
  if(arr.includes(b) === true){
    return true
  }
  return false
  }
  console.log (V([1,2,3,4,5],3))
//End of Question 2

//Question 3
function B(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return B(str.slice(1,-1))
  return false;
}
console.log(B('rotor')) 
console.log(B('asa')) 
console.log('')
console .log(B('ball'))
//end of Question 3

