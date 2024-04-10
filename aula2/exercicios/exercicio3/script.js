function calcular(operacao){
	let valor1 = parseFloat(document.getElementById("valor1").value);
	let valor2 = parseFloat(document.getElementById("valor2").value);
	let resultado;
	switch(operacao){
		case "+":
			resultado = valor1 + valor2;
			break;
		case "-":
			resultado = valor1 - valor2;
			break;
		case "*":
			resultado = valor1 * valor2;
			break;
		case "/":
			resultado = valor1 / valor2;
			break;
		default:
			resultado = 0;
			break;
	}

	document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
