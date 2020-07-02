export default function CalculadoraService() {

	const SOMA = '+';
	const SUBTRACAO = '-';
	const DIVISAO = '/';
	const MULTIPLICACAO = '*';

	function calcular(numero1, numero2, operacao) {

		let resultado;

		switch (operacao) {
			case SOMA:
				resultado = numero1 + numero2;
				break;

			case SUBTRACAO: {
				resultado = numero1 - numero2;
				break
			}

			case DIVISAO: {
				resultado = numero1 / numero2;
				break;
			}

			case MULTIPLICACAO: {
				resultado = numero1 * numero2;
				break;
			}

			default: {
				resultado = 0;
			}
		}

		return resultado;
	}

	function concatenarNumero(numeroAtual, numeroConcat) {

		//Caso contenha apenas 0 ou null, reinicia o valor
		if (numeroAtual === '0' || numeroAtual === null) {
			numeroAtual = '';
		}

		//Quando o primeiro dígito for '.', concatena '0' antes do ponto
		if (numeroConcat === '.' && numeroAtual === '') {
			return '0.';
		}

		//Caso for '.' e o ponto já ter sido digitado, apenas retornar
		if (numeroConcat === '.' && numeroAtual.indexOf('.') > -1) {
			return numeroAtual;
		}

		return numeroAtual + numeroConcat;
	}

	return [
		calcular,
		concatenarNumero,
		SOMA,
		SUBTRACAO,
		DIVISAO,
		MULTIPLICACAO
	];
}