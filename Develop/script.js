// Código de asignación
/* var generateBtn = document.querySelector('#generate'); */

// Escriba la contraseña en la entrada #password

// Generate random password depending on users criteria
/* const rdmPassword = function (len) {

};


const generatePassword = function () {
	let passChar;

	const passLen = Number(
		prompt('Seleccione el largo de la contraseña entre 8 y 128 carácteres')
	);
	if (passLen >= 8 && passLen <= 128) {
		passChar = prompt(
			'Desea incluir letras minúsculas o mayúsculas, numeros y/o caracteres especiales'
		);
	} else {
		alert('Seleccione entre 8 y 128 carácteres');
	}
};

function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword); */

/* TODO

El Desafío de esta semana requiere que cree 
una aplicación que un empleado pueda usar para 
generar una contraseña aleatoria en función de los 
criterios que haya seleccionado. Esta aplicación se ejecutará 
en el navegador y presentará HTML y CSS actualizados dinámicamente 
con el código JavaScript que usted escriba. Tendrá una interfaz de 
usuario limpia y pulida que es responsiva, asegurando que se adapte a
múltiples tamaños de pantalla. Su trabajo del curso de esta semana le 
enseñará todas las destrezas que necesita para tener éxito en esta asignación.

CONSIDERANDO que necesito una nueva contraseña segura
CUANDO hago click en el botón para generar una contraseña
ENTONCES me proporcionan una serie de "prompts" con opciones para generar la contraseña
CUANDO me presentan las opciones para generar la contraseña
ENTONCES selecciono que requisitos incluir en la contraseña
CUANDO me presentan la opcion para la longitud de la contraseña
ENTONCES selecciono una longitud de al menos 8 caracteres y no mas de 128 caracteres
CUANDO me presentan las opciones sobre que tipos de caracteres incluir en la contraseña
ENTONCES confirmo si incluir o no incluir letras minúsculas o mayúsculas, numeros y/o caracteres especiales
CUANDO confirmo cada "prompt"
ENTONCES la informacion proporcionada debe ser validada y al menos un tipo de caracter debe ser seleccionado
CUANDO todos los "prompts" son respondidos
ENTONCES se genera una contraseña que cumple con los requisitos seleccionados
CUANDO se generó la contraseña
ENTONCES la constraseña se muestra en una alerta o se escribe en la página


*/

/* 

length 8 caracteres y no mas de 128 caracteres
tipos de caracteres 
informacion proporcionada debe ser validada y al menos un tipo de caracter



*/

/* const characters = [
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
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
]; */
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
const passCaps = confirm('¿Quieres incluir letras mayúsculas? Presiona OK or Cancel');
const passLowCaps = confirm('¿Quieres incluir letras minúsculas? Presiona OK or Cancel');
const passNum = confirm('¿Quieres incluir números? Presiona OK or Cancel');
const passSymbols = confirm('¿Quieres incluir letras símbolos especiales? Presiona OK or Cancel');

if (passLen >= 8 && passLen <= 129) {
} else {
	alert('Porfavor seleccione entre 8 y 128 carácteres');
}

password = tempArr.join('');
console.log(password);

/* 	let passArr = [];

	for (let i = 0; i < passLen; i++) {
		const rmdChar = characters[Math.floor(Math.random() * (passLen + 1))];
		passArr.push(rmdChar);

		const password = passArr.join('');

		console.log(password); */
