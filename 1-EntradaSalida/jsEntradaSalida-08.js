/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	
	let dividiendo;
	let divisor;
	let resultado;

	dividiendo = parseInt(txtIdNumeroDividendo.value);
	divisor = parseInt(txtIdNumeroDivisor.value);
	
	resultado = dividiendo % divisor;

	alert("El resto es " + resultado);
}
