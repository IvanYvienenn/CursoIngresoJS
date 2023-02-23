/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorNegativos = 0;
	let contadorPositivos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	respuesta = true;

	while (respuesta == true) {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado < 0) {
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos++;
		} else if (numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos++;
		} else {
			contadorCeros++
		}
		if (numeroIngresado % 2 === 0) {
			contadorPares++;
		}
		respuesta = confirm("desea continuar?");
	}//fin del while
	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioPositivos = sumaPositivos / contadorPositivos;
	diferencia = sumaPositivos - sumaNegativos;
	if (contadorNegativos == 0) {
		promedioNegativos = 0;
	} else if (contadorPositivos == 0) {
		promedioPositivos = 0;
	}
	
	document.write("la suma de negativos es :" + sumaNegativos + "<br/>"
	+ "la suma de positivos es :" + sumaPositivos + "<br/>"
	+ "la cantidad de positivos es :" + contadorPositivos + "<br/>"
	+ "la cantidad de negativos es :" + contadorNegativos + "<br/>"
	+ "la cantidad de ceros es :" + contadorCeros + "<br/>"
	+ "la cantidad de pares es :" + contadorPares + "<br/>"
	+ "el promedio de positivos es :" + promedioPositivos.toFixed(1) + "<br/>"
	+ "el promedio de negativos es :" + promedioNegativos.toFixed(1) + "<br/>"
	+ "la diferencia de positivos y negativos es :" + diferencia + "<br/>"); 
}//FIN DE LA FUNCIÓN