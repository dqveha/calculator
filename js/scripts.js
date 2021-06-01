function temperature(num1) {
  return (num1 * (9/5)) + 32;
}

const num1 = parseInt(prompt("Enter celsius temperature to convert to fahrenheit:"));
const result = temperature(num1).toFixed(1);
alert(result + " F");
