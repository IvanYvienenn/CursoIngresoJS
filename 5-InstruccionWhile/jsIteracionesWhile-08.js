/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = true;
	
	while (respuesta == true) {
		numeroIngresado = prompt("Ingrese los numeros");
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1;
		respuesta = confirm("Desea ingresar otro numero?");
	}
	if (numeroIngresado > 0) {
		numeroIngresado =+ numeroIngresado;
		alert(numeroIngresado);
	} else {
		numeroIngresado = numeroIngresado 
	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN