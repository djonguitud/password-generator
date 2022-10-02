var generateBtn = document.querySelector('#generate');

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

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

let password;
const passLen = Number(prompt('Seleccione el largo de la contraseña entre 8 y 128 carácteres'));

const passwordGenerator = function (len) {
	let passwordArray = [];
	let tempArr = [];
	let rslt;

	const withNumb = confirm('Numbers?');
	withNumb ? tempArr.push(...numbers) : alert('No selected');

	const withLowLett = confirm('Low letters?');
	withLowLett ? tempArr.push(...lowLett) : alert('No selected');

	const withCapLett = confirm('Cap letters?');
	withCapLett ? tempArr.push(...capLett) : alert('No selected');

	passwordArray.push(espChar[Math.floor(Math.random() * (espChar.length + 1))]);

	for (let i = 0; i < len - 1; i++) {
		passwordArray.push(tempArr[Math.floor(Math.random() * (tempArr.length + 1))]);
	}

	rslt = passwordArray.join('');

	return rslt;
};

if (passLen >= 8 && passLen <= 129) {
	password = passwordGenerator(passLen);
} else {
	alert('Porfavor seleccione entre 8 y 128 carácteres');
}
