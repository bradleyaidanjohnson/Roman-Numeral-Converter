const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumerals = [
  { value: 1000, symbol: 'M' },
  { value: 900, symbol: 'CM' },
  { value: 500, symbol: 'D' },
  { value: 400, symbol: 'CD' },
  { value: 100, symbol: 'C' },
  { value: 90, symbol: 'XC' },
  { value: 50, symbol: 'L' },
  { value: 40, symbol: 'XL' },
  { value: 10, symbol: 'X' },
  { value: 9, symbol: 'IX' },
  { value: 5, symbol: 'V' },
  { value: 4, symbol: 'IV' },
  { value: 1, symbol: 'I' },
];

const converter = (num) => {
  let result = '';
  romanNumerals.forEach((item) => {
    while(num >= item.value) {
      result += item.symbol;
      num -= item.value;
    }
  });
  return result;
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