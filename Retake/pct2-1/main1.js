// function returnNumb(arr) {
//     let min = arr[0]
//     let max = arr[0]
//     let sum = 0
//     let avg = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if(arr[i] < min)  min = arr[i];
//         if(arr[i] > max)  max = arr[i];

//     }
//     avg = sum / arr.length
//     return {min, max, sum, avg}
// }

// console.log(returnNumb([5, 6, 41, 12, 3]));

function minMaxSumAvg(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) max = arr[i];
  }
  avg = sum / arr.length
  return {min, max, sum, avg}
}

console.log(minMaxSumAvg([5, 8, 9, 1]));