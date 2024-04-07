//function to find the largest element in an array.

function largestnum(arr){
   let max = arr[0];

   for(let i=0; i<arr.length;i++){
      if(arr[i] > max){
         max = arr[i];
      }
   }
   return max;
}

console.log(largestnum([1,2,3]))