function converterParaMaiusculas(){
	let text = document.getElementById("texto").value;
	let message = "Texto com letras maiúsculas:";
	document.getElementById("textoComMaiusculas").textContent = message + " " + text.toUpperCase();
}
