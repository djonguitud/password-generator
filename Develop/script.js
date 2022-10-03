//Variables
let generateBtn = document.querySelector('#generate');
let passwordText = document.querySelector('#password');

let passwordGenerator = {
	password: null,
	passwordLength: null,
	numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
	capLett: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'p', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	lowLett: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	espChar: ['"', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'],
	passwordFabric: {
		passwordArray: [],
		tempArr: [],
		passwordArrayTest: function (len) {
			for (let i = 0; i < len; i++) {
				this.passwordArray.push(this.tempArr[Math.floor(Math.random() * this.tempArr.length)]);
			}
		},
		product: function (len) {
			//Asking the user preferences
			let withLowLett = confirm('¿Te gustaría incluir letras minúsculas?');
			withLowLett ? this.tempArr.push(...passwordGenerator.lowLett) : null;

			let withCapLett = confirm('¿Te gustaría incluir letras mayúsculas?');
			withCapLett ? this.tempArr.push(...passwordGenerator.capLett) : null;

			let withNumbEspChar = prompt('¿Te gustaría incluir números? Presiona 1. ¿Mejor con caracteres espciales? Presiona 2. Las dos opciones presiona 3');

			switch (
				withNumbEspChar //Asking user if she/he wants numbers and/or special characters
			) {
				case '1':
					this.tempArr.push(...passwordGenerator.numbers);
					break;
				case '2':
					this.tempArr.push(...passwordGenerator.espChar);
					break;
				case '3':
					this.tempArr.push(...passwordGenerator.numbers, ...passwordGenerator.espChar);
					break;
			}

			this.passwordArrayTest(len);

			let rslt = this.passwordArray.join(''); //Convert the password array to a string

			this.passwordArray.splice(0, this.passwordArray.length); //prevents to double the password on later clicks
			return rslt;
		},
	},
	passwordString: {
		passwordStringLenght: function () {
			passwordGenerator.passwordLength = Number(prompt('Seleccione el largo de la contraseña entre 8 y 128 carácteres'));
			if (passwordGenerator.passwordLength >= 8 && passwordGenerator.passwordLength <= 128) {
				passwordGenerator.password = passwordGenerator.passwordFabric.product(passwordGenerator.passwordLength); //rslt returned
				console.log(passwordGenerator.password.length);
				return (passwordText.textContent = passwordGenerator.password);
			} else {
				alert('Porfavor seleccione entre 8 y 128 carácteres');
			}
		},
	},
};

generateBtn.addEventListener('click', passwordGenerator.passwordString.passwordStringLenght);

/* 
	do {
		this.passwordArrayTest(len);
		if (
			this.passwordArray.includes(...passwordGenerator.numbers) &&
			this.passwordArray.includes(...passwordGenerator.lowLett) &&
			this.passwordArray.includes(...passwordGenerator.capLett) &&
			this.passwordArray.includes(...passwordGenerator.espChar)
		) {
			console.log('Contains all characters');
			break;
		} else {
			this.passwordArray.splice(0, this.passwordArray.length);
		}
	} while (true);
 */
