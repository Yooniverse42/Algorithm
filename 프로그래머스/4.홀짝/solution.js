const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(0)); // true
console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(101)); // false
console.log(isEven(-2)); // true
