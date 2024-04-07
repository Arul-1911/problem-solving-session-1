//function to find the second largest element in an array

function secondLarge(arr) {

  if (arr.length < 2) return false;
  let max = arr[0];
  let result = []; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      result.push(max); 
      max = arr[i]; 
    } else if (arr[i] < max && arr[i] > result[result.length - 1]) {
      result.push(arr[i]); 
    }
  }
  return result[result.length - 1]; 
}

console.log(secondLarge([78,1,10,3,50,100]))