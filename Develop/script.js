/* 
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
 */

let tempArr = [];
let password;
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
	'\\',
	']',
	'^',
	'_',
	'{',
	'|',
	'}',
	'~',
];

const passLen = Number(prompt('Seleccione el largo de la contraseña entre 8 y 128 carácteres'));

let concatArr = [...numbers, ...capLett, ...lowLett, ...espChar];

for (let i = 0; i < passLen; i++) {
	tempArr.push(concatArr[Math.floor(Math.random() * (concatArr.length + 1))]);
}

console.log(tempArr);
8;
