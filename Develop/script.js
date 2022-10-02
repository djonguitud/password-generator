/* 
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
 */

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const capLett = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'M',
	'N',
	'O',
	'p',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

const lowLett = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const espChar = [
	'"',
	'!',
	'"',
	'#',
	'$',
	'%',
	'&',
	"'",
	'(',
	')',
	'*',
	'+',
	'-',
	'.',
	'/',
	':',
	';',
	'<',
	'>',
	'?',
	'@',
	'[',
	']',
	'^',
	'_',
	'{',
	'|',
	'}',
	'~',
];

// Code to generate password
/* const passLen = Number(prompt('Seleccione el largo de la contraseña entre 8 y 128 carácteres'));

let tempArr = [];
let password;

const concatArr = [...numbers, ...capLett, ...lowLett];

tempArr.push(espChar[Math.floor(Math.random() * (espChar.length + 1))]);
for (let i = 0; i < passLen - 1; i++) {
	tempArr.push(concatArr[Math.floor(Math.random() * (concatArr.length + 1))]);
}

password = tempArr.join('');
console.log(password);
console.log(password.length);
 */

let password;
let passwordArray = [];
let tempArr = [];

const passLen = Number(prompt('Seleccione el largo de la contraseña entre 8 y 128 carácteres'));

//Logic will apply

const withNumb = confirm('Numbers?');

withNumb ? tempArr.push(...numbers) : null;

const withLowLett = confirm('Low letters?');

withLowLett ? tempArr.push(...lowLett) : null;

const withCapLett = confirm('Cap letters?');

withCapLett ? tempArr.push(...capLett) : null;

// Generate password array to convert to string
passwordArray.push(espChar[Math.floor(Math.random() * (espChar.length + 1))]); // Select a random special character
for (let i = 0; i < passLen - 1; i++) {
	passwordArray.push(tempArr[Math.floor(Math.random() * (tempArr.length + 1))]); // Iterate by the password lenght selected
}

console.log(passwordArray);

password = passwordArray.join('');

console.log(password);
