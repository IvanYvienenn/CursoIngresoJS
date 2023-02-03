/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	// Declaro variables

	let num1;
	let num2;
	let resultado;

	num1 = parseInt(txtIdNumeroUno.value);
    num2 = parseInt(txtIdNumeroDos.value);

	resultado = num1 + num2;

	alert("La suma es " + resultado);



}

