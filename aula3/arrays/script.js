let array = [];

// Função para adicionar um valor ao array e atualizar a exibição
function addValue() {
		let inputValue = parseInt(document.getElementById('inputValue').value);
		if (!isNaN(inputValue)) {
				array.push(inputValue);
				displayArray();
		} else {
				alert('Por favor, insira um número válido.');
		}
}

// Função para remover o último valor do array e atualizar a exibição
function removeValue() {
		if (array.length > 0) {
				array.pop();
				displayArray();
		} else {
				alert('O array está vazio.');
		}
}

// Função para somar os valores do array e exibir o resultado
function sumValues() {
		let sum = array.reduce((total, value) => total + value, 0);
		document.getElementById('sumResult').textContent = `Soma dos valores: ${sum}`;
}

// Função para exibir os valores do array
function displayArray() {
		let arrayValuesElement = document.getElementById('arrayValues');
		arrayValuesElement.innerHTML = '[';
		let numQuotes = array.length - 1;
		array.forEach(value => {
				let span = document.createElement('span');
				span.textContent = value;
				if(numQuotes){
					span.textContent += ', ';
					numQuotes--;
				}
				arrayValuesElement.appendChild(span);
		});
		arrayValuesElement.innerHTML += ']';
}
