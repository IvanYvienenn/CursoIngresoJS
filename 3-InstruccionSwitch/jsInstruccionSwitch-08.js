function mostrar() {
	let destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado) {
		case "Ushuaia":
		case "Bariloche":
			alert("Frio.");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Calor.");
			break;
	}

}//FIN DE LA FUNCIÓN