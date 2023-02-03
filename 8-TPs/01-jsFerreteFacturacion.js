/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    resultado = precio1 + precio2 + precio3;

    alert("El resultado de la suma es " + resultado);


}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let sumaprecio;
    let resultado;

    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    sumaprecio = precio1 + precio2 + precio3;
    resultado = sumaprecio / 3;

    alert("El promedio es de  " + resultado);	
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;
    let iva;
    let preciofinal;

    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    resultado = precio1 + precio2 + precio3;
    iva = resultado * (21 / 100);
    preciofinal = resultado + iva;

    alert("El precio final es  " + preciofinal);
}