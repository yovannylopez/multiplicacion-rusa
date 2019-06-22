const multiplicacionRusa = (num1, num2) => {
	let divisible = true;
	let resultado = 0;
	let i = 1;

	while (divisible) {
		document.write('Recorrido ' + i + '<br>');
		document.write(
			'Multiplicando: ' + num1 + ' Multiplicador: ' + num2 + '<br>'
		);

		if (num1 > 1) {
			if (num1 % 2 != 0) {
				resultado = resultado + num2;
			}

			num1 = Math.floor(num1 / 2);
			num2 = num2 * 2;
			document.write('Resultado: ' + resultado + '<br><br>');
		} else {
			resultado = resultado + num2;
			document.write('Resultado: ' + resultado + '<br><br>');
			divisible = false;
		}

		i++;
	}

	return resultado;
};

let num1 = parseInt(prompt('Ingrese el multiplicando'));
let num2 = parseInt(prompt('Ingrese el multiplicador'));

const multiplicacion = multiplicacionRusa(num1, num2);

document.write('El resultado de la multiplicación es: ' + multiplicacion);
