//function to find the nth Fibonacci number using iteration

function Fibonacci(n){
   if(n < 0) return -1;

   let a = 0;
   let b = 1;

   if(n === 0){
      return a;
   }

   for(let i = 2; i <=n; i++){
      let temp = b;
      b = a + b;
      a = temp;
   }

   return b;
}

console.log(Fibonacci(4))