function calculateBMI(weight, height) {
  let BMI = weight / (height * height);
  return BMI;
}

function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight, height);

  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI <= 24.9 && BMI > 18.5) {
    return "Normal weight";
  } else if(BMI > 25.0) {
    return "Overweight";
  }
  
}

console.log(getBMIMeaning(44, 1.6));
