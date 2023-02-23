function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	let notaRandom;

	notaRandom = Math.floor(Math.random() * 10) + 1;

	if (notaRandom >= 9) {
		alert("Excelente");
	}
	else if (notaRandom < 4) {
		alert("Vamos, la proxima se puede");
	}
	else {
		alert("Aprobo");
	}
}//FIN DE LA FUNCIÓN

// a: 9,10
// b: 1,2,3
// c: 4,5,6,7,8
