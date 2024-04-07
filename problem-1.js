// function to check if a given number is prime

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  let sum = 0;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    sum+= 1; 
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  sum+= 1; 
  console.log("Number of iterations: ", sum);
  return true;
}

console.log(isPrime(230));
