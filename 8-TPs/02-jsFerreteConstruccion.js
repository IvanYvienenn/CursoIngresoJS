/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo;
    let ancho;
    let perimetro;
    let totalAlambre;

    largo = parseFloat(txtIdLargo.value);
    ancho = parseFloat(txtIdAncho.value);

    perimetro = (largo + ancho) * 2;
    totalAlambre = perimetro * 3;

    alert("Se debe comprar " + totalAlambre.toFixed(2) + " metros de alambre");

}
function Circulo() {
    let radio;
    let diametro;
    let circunferencia;
    let alambre;

    radio = parseFloat(txtIdRadio.value);

    diametro = radio * 2;
    circunferencia = diametro * Math.PI;
    alambre = circunferencia * 3;

    alert("Se debe comprar " + alambre.toFixed(2) + " metros de alambre");
}
function Materiales() {
    let largo;
    let ancho;
    let superficie;
    let bolsaDeCemento;
    let bolsaDeCal;

    largo = parseFloat(txtIdLargo.value);
    ancho = parseFloat(txtIdAncho.value);

    bolsaDeCemento = 2;
    bolsaDeCal = 3;

    superficie = largo * ancho;
    bolsaDeCal = bolsaDeCal * superficie;
    bolsaDeCemento = bolsaDeCemento * superficie;

    alert("Se debe comprar " + bolsaDeCemento.toFixed(1) + " bolsas de cemento" + " y " + bolsaDeCal.toFixed(1) + " de cal");
}