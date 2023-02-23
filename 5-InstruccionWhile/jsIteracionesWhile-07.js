/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador;
	let acumulador;
	let respuesta;
	contador = 0;
	acumulador = 0;
	respuesta = true;
	while (respuesta == true) {
		acumulador = prompt("Ingrese los numeros");
		acumulador = parseInt(acumulador);
		acumulador = acumulador + acumulador;
		contador = contador + 1;
		respuesta = confirm("Desea ingresar otro numero?");
	}


	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contador;

}//FIN DE LA FUNCIÓN