/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoBruto;
	let legajo;
	let Nacionalidad;

	do {
		edadIngresada = prompt("Ingrese su edad");
	} while (edadIngresada < 18 || edadIngresada > 90);
	do {
		sexoIngresado = prompt("Ingrese M para masculino y F para femenino");
	} while (sexoIngresado != "M" && sexoIngresado != "F");
	do {
		estadoCivilIngresado = prompt("1 si es soltero, 2 si es casado, 3 si es divorciado o 4 si es viudo")
	} while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4);

	switch (estadoCivilIngresado) {
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
		case 4:
			estadoCivilIngresado = "Viudo";
			break;
	}
	do {
		sueldoBruto = prompt("Ingrese su sueldo bruto no menor a 8000");
	} while (sueldoBruto < 8000);
	do {
		legajo = prompt("Ingrese su numero de legajo");
	} while (legajo < 1000 || legajo > 9999);
	do {
		Nacionalidad = prompt("Ingrese su nacionalidad A si es argentino,E si es extranjero, N si es nacionalizado");
	} while (Nacionalidad != "A" && Nacionalidad != "E" && Nacionalidad != "N");

	document.getElementById("txtIdEdad").value = edadIngresada;         
	txtIdSexo.value = sexoIngresado;
	txtIdEstadoCivil.value = estadoCivilIngresado;
	txtIdSueldo.value = sueldoBruto;
	txtIdLegajo.value = legajo;
	txtIdNacionalidad.value = Nacionalidad;
}
