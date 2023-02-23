function mostrar() {
	let estacionIngresada = txtIdEstacion.value;
	let destinoIngresado = txtIdDestino.value;
	let descuento = 0;
	let aumento = 0;
	let precioFinal;
	const TARIFA_VIAJE = 15000;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					aumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
					break;
				case "Mar del plata":
					descuento = 20;
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					descuento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 10;
					break;
				case "Mar del plata":
					aumento = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destinoIngresado != "Cordoba") {
				aumento = 10;
			}
			else {
				descuento = 0;
			}
			break;
	}
	
if (aumento != 0) {
	precioFinal = TARIFA_VIAJE + TARIFA_VIAJE * aumento /100;
}
else{
	precioFinal = TARIFA_VIAJE - TARIFA_VIAJE * descuento /100;
}

alert("El viaje sale " + precioFinal);

}//FIN DE LA FUNCIÓN

