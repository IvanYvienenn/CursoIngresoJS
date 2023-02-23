function mostrar() {
	let destinoIngresado = txtIdDestino.value;
	switch (destinoIngresado) {
		case "Cataratas":
			alert("Norte.");
			break;
		case "Ushuaia":
			alert("Sur.");
			break;
		case "Bariloche":
			alert("Oeste.");
			break;
		case "Mar del plata":
			alert("Este.");
			break;
	}
}//FIN DE LA FUNCIÓN