var isPrime = function isPrime(n) {
  try {
    var k;
    for (k = 2; k < n; k += 1) {
      if (n % k === 0) {
        return false;
      }
    }
  } catch (err) {
    console.error(err);
  }
  return true;
}

var generatePrimes = function generatePrimes() {
    var primes = [];

    for (var n = 1; n < 100000; n = n + 2) {
        if (isPrime(n)) {
            primes.push(n);
        }
    }

    console.log('primes', primes);
}

document.getElementById('generatePrimesButton').addEventListener('click', generatePrimes);
