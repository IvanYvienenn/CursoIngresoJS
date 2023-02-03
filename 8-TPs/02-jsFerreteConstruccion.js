/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largo;
let ancho;
let perimetro;
let totalalambre;

largo = parseFloat(txtIdLargo.value);
ancho = parseFloat(txtIdAncho.value);

perimetro = (largo + ancho) * 2;
totalalambre = perimetro * 3;

alert("Debe comprar " + totalalambre + " metros de alambre");

}
function Circulo () 
{
	let radio;
    let diametro;
    let circunferencia;
    let alambre;

    radio = parseFloat(txtIdRadio.value);
    diametro = radio * 2;
    circunferencia = diametro * 3.14;
    alambre = circunferencia * 3;

    alert ("Debe comprar " + alambre + " metros de alambre");
}
function Materiales () 
{
let largo;
let ancho;
let superficie;
let bolsadecemento;
let bolsadecal;
let totalbolsacemento;
let totalbolsacal;

largo = parseFloat(txtIdLargo.value);
ancho = parseFloat(txtIdAncho.value);

bolsadecemento = 2;
bolsadecal = 3;

superficie = largo * ancho;
totalbolsacal = bolsadecal * superficie;
totalbolsacemento = bolsadecemento * superficie;

alert("Se debe comprar " + totalbolsacemento + " bolsas de cemento" + " y" + totalbolsacal + " de cal");
}