// function isValidPassword(password) {
//     if (password.length < 8 || !password || password === undefined || password === null) {
//         return false;
//     }

//     const uppercase = /[A-Z]/
//     const lowercase = /[a-z]/
//     const digit = /[0-9]/
//     const specialCase = /[@#$%^&*!]/

//     return uppercase.test(password) && lowercase.test(password)
//     && digit.test(password) && specialCase.test(password)

// }

// console.log(isValidPassword("aA12345@v"));
// console.log(isValidPassword("asdf1"));
// console.log(isValidPassword(""));

function passwordValidation(password) {
  if (password?.length < 8 || !password) {
    return false;
  }

  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const digit = /[0-9]/;
  const specialCase = /[@#$%^&*!]/;

  return (
    upperCase.test(password) &&
    lowerCase.test(password) &&
    digit.test(password) &&
    specialCase.test(password)
  );
}

console.log(passwordValidation("aA12345@v"));
console.log(passwordValidation(""));
