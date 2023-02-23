/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	
	let numeroIngresado;
	do {
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");	
		//    11  es mayor que 0  O  11    menor que 9
		//           v                           f
	} while (!(numeroIngresado > 0 && numeroIngresado < 9)) 
	//(numeroIngresado < 0 || numeroIngresado > 9);

	txtIdNumero.value = numeroIngresado + " Es valido";
	
	
}//FIN DE LA FUNCIÓN