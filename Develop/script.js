//Variables

let generateBtn = document.querySelector('#generate');
let passwordText = document.querySelector('#password');

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let capLett = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'p', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowLett = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let espChar = ['"', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

//Functions
function passwordGenerator(len) {
	let passwordArray = [];
	let tempArr = [];
	let arrPasswGen = function (len) {
		for (let i = 0; i < len; i++) {
			passwordArray.push(tempArr[Math.floor(Math.random() * tempArr.length)]);
		}
	};

	//Asking the user preferences
	let withLowLett = confirm('¿Te gustaría incluir letras minúsculas?');
	withLowLett ? tempArr.push(...lowLett) : '';

	let withCapLett = confirm('¿Te gustaría incluir letras mayúsculas?');
	withCapLett ? tempArr.push(...capLett) : '';

	let withNumbEspChar = prompt('¿Te gustaría incluir números? Presiona 1. ¿Mejor con caracteres espciales? Presiona 2. Las dos opciones presiona 3');

	switch (
		withNumbEspChar //Asking user if she/he wants numbers and/or special characters
	) {
		case '1':
			tempArr.push(...numbers);
			break;
		case '2':
			tempArr.push(...espChar);
			break;
		case '3':
			tempArr.push(...numbers, ...espChar);
			break;
	}

	arrPasswGen(len);

	let rslt = passwordArray.join(''); //Convert the password array to a string
	return rslt;
}

function generatedPassword() {
	let passLen = Number(prompt('Seleccione el largo de la contraseña entre 8 y 128 carácteres'));
	let password;

	if (passLen >= 8 && passLen <= 128) {
		password = passwordGenerator(passLen); //rslt returned
		console.log(password.length);
		return (passwordText.textContent = password);
	} else {
		alert('Porfavor seleccione entre 8 y 128 carácteres');
	}
}

//Final Product

generateBtn.addEventListener('click', generatedPassword);
