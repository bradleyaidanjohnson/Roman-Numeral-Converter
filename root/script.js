const number = document.getElementById("number")
const convertButton = document.getElementById("convert-btn")
const output = document.getElementById("output")

const converter = (int) => {
  if (int === 0) {
    return '';
  } else if (int >= 1000) {
    int -= 1000;
    return "M" + converter(int);
  } else if (int >= 900) {
    int -= 900;
    return "CM" + converter(int);
  } else if (int >= 500) {
    int -= 500;
    return "D" + converter(int);
  } else if (int >= 400) {
    int -= 400;
    return "CD" + converter(int);
  } else if (int >= 100) {
    int -= 100;
    return "C" + converter(int);
  } else if (int >= 90) {
    int -= 90;
    return "XC" + converter(int);
  } else if (int >= 50) {
    int -= 50;
    return "L" + converter(int);
  } else if (int >= 40) {
    int -= 40;
    return "XL" + converter(int);
  } else if (int >= 10) {
    int -= 10;
    return "X" + converter(int);
  } else if (int >= 9) {
    int -= 9;
    return "IX" + converter(int);
  } else if (int >= 5) {
    int -= 5;
    return "V" + converter(int);
  } else if (int >= 4) {
    int -= 4;
    return "IV" + converter(int);
  } else if (int >= 1) {
    int-= 1;
    return "I" + converter(int);
}
}

convertButton.addEventListener("click", (e) =>{
  e.preventDefault();
  const parsedNumber = parseInt(number.value);

  if (parsedNumber === NaN || number.value === "") {
    output.innerHTML = "<p>Please enter a valid number</p>"
  } else if (parsedNumber < 1 ){
    output.innerHTML = "<p>Please enter a number greater than or equal to 1</p>"
  } else if (parsedNumber > 3999 ){
    output.innerHTML = "<p>Please enter a number less than or equal to 3999</p>"
  } else {
    output.innerHTML = `<p>${converter(parsedNumber)}</p>`;
  }
})