function mostrar() {
	//tomo la edad  
	let edad;

	edad = parseInt(txtIdEdad.value);

	if (edad >= 18) {
		alert("Usted es mayor de edad");
	}
	else if (edad < 13) {
		alert("Usted es un niño");
	}
	else {
		alert("Usted es un adolescente");
	}
	// > mayor que       < menor que 
	// Usar los 3 ifs es valido pero esta mal es redundante

}//FIN DE LA FUNCIÓN