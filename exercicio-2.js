// Resolução com recursividade

function fibonacci(num) {
  function recursiveFibonacci(x) {
    if (x <= 1) {
      return x;
    }

    return recursiveFibonacci(x - 1) + recursiveFibonacci(x - 2);
  }

  let i = 0;

  let fibonac = recursiveFibonacci(i);

  while (fibonac <= num) {
    if (fibonac === num) {
      return true;
    }
    i++;

    fibonac = recursiveFibonacci(i);
  }
  return false;
}

const testNumber = 34;

console.log(
  `${testNumber} ${
    fibonacci(testNumber) ? "pertence" : "não pertence"
  } a sequência de fibonacci.`
);

// Resolução sem recursividade e uso de operador ternário

function notRecursiveFibonacci(num) {
  let previous = 0;
  let current = 1;

  while (current <= num) {
    let isFibonacci = number === current ? true : false;

    if (isFibonacci) {
      return true;
    }

    let next = previous + current;
    previous = current;
    current = next;
  }
  return false;
}

const number = 21;

console.log(
  `${number} ${
    notRecursiveFibonacci(number) ? "pertence " : "não pertence "
  } a sequência de fibonacci`
);
