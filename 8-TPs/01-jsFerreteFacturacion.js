/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    suma = precio1 + precio2 + precio3;

    alert("El resultado de la suma es " + suma.toFixed(2));


}
function Promedio() {
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let resultado;

    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    suma = precio1 + precio2 + precio3;
    resultado = suma / 3;

    alert("El promedio es de  " + resultado.toFixed(2));
}
function PrecioFinal() {
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let iva;
    let precioFinal;

    precio1 = parseFloat(txtIdPrecioUno.value);
    precio2 = parseFloat(txtIdPrecioDos.value);
    precio3 = parseFloat(txtIdPrecioTres.value);

    suma = precio1 + precio2 + precio3;
    iva = suma * (21 / 100);
    precioFinal = suma + iva;

    alert("El precio final es  " + precioFinal.toFixed(2));
}