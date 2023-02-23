/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFahrenheit;
    let temperaturaCelcius;

    temperaturaFahrenheit = parseFloat(txtIdTemperatura.value);
    temperaturaCelcius = (temperaturaFahrenheit - 32) * 5/9;

    alert(temperaturaFahrenheit + " Fahrenheit son " + temperaturaCelcius.toFixed(1) + " centigrados")
}

function CentigradosFahrenheit () 
{
	let temperaturaCelcius;
    let temperaturaFahrenheit;

    temperaturaCelcius = parseFloat(txtIdTemperatura.value);
    temperaturaFahrenheit = (temperaturaCelcius * 9/5) + 32;

    alert(temperaturaCelcius + " centigrados son " + temperaturaFahrenheit.toFixed(1) + " Fahrenheit")
}
