function fizzBuzz(max) {
    let output = ``;
    for (let i = 1; i <= max; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output += `FizzBuzz`;
      } else if (i % 3 == 0) {
        output += `Fizz`;
      } else if (i % 5 == 0) {
        output += `Buzz`;
      } else {
        output += i;
      }
    }
    return output;
  }