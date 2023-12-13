// function minMedMax(num1, num2, num3) {
//     let max;
//     let min;
//     let mid;

//     if (num1 >= num2 && num2 >= num3) {
//       max = num1;
//       min = num3;
//       mid = num2;
//     } else if (num1 >= num3 && num3 >= num2) {
//       max = num1;
//       min = num2;
//       mid = num3;
//     }

//     if (num2 >= num1 && num1 >= num3) {
//       max = num2;
//       min = num3;
//       mid = num1;
//     } else if (num2 >= num3 && num3 >= num1) {
//       max = num2;
//       min = num1;
//       mid = num3;
//     }

//     if (num3 >= num2 && num2 >= num1) {
//       max = num3;
//       min = num1;
//       mid = num2;
//     } else if (num3 >= num1 && num1 >= num2) {
//       max = num3;
//       min = num2;
//       mid = num1;
//     }

//     const result = { max: max, mid: mid, min: min };
//     return result;
//   }

//   console.log(minMedMax(5, -1, 80));

function minMidMax(num1, num2, num3) {
  let min = num1;
  let max = num1;

  if (num2 < min) {
      min = num2;
  } else if (num2 > max) {
      max = num2;
  }

  if (num3 < min) {
      min = num3;
  } else if (num3 > max) {
      max = num3;
  }

  let mid = (min + max) - (num1 + num2 + num3);

  return { min, mid, max };
}