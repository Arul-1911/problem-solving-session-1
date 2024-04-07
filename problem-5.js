// function to calculate the factorial of a number using iteration.

function factorial(n){
   if(n < 0) return -1
   let res = 1;
   for(let i=2; i <=n; i++){
      res *= i
   }
   return res;
}

console.log(factorial(4))