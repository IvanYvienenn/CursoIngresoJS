function mostrar() {
	//tomo el mes
	let mesDelAnio = txtIdMes.value;

	switch (mesDelAnio) {
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		default:
			alert("Falta para el invierno");
	}
}//FIN DE LA FUNCIÓN