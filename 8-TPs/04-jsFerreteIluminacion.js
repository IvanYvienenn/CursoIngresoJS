function CalcularPrecio() {

    let lamparasCompradas;
    let precioLamparas = 35;
    let descuento = 0;
    let precioLamparasTotal;
    let precioSumado;
    let marca;
    let idDescuento;
    let ingresosBrutos;

    lamparasCompradas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch (lamparasCompradas) {
        case 5:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
                    break;
            }
            break;
        case 4:
            switch (marca) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;

                default:
                    descuento = 20;
                    break;
            }
            break;
        case 3:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break;
            }
            break;
        case 2:
            descuento = 0;
            break;
        case 1:
            descuento = 0
            break;
        default:
            descuento = 50;
            break;
    }
    precioSumado = precioLamparas * lamparasCompradas;
    precioLamparasTotal = precioSumado - (precioSumado * descuento / 100);
    
    if (precioLamparasTotal > 120) {
        ingresosBrutos = precioLamparasTotal * (10 / 100);
        precioLamparasTotal = precioLamparasTotal + ingresosBrutos;

        alert("IIBB Usted pago " + ingresosBrutos.toFixed(2));
    }
    idDescuento = precioLamparasTotal.toFixed(2);
    document.getElementById("txtIdprecioDescuento").value = idDescuento;
}










/*precioLamparas = 35;
    lamparasCompradas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precioSumado = precioLamparas * lamparasCompradas;
    precioLamparasTotal = precioSumado;

    if (lamparasCompradas >= 6) {
        descuento = precioSumado * (50 / 100);
        precioLamparasTotal = precioSumado - descuento;
    }
    else if (lamparasCompradas == 5) {
        if (marca == "ArgentinaLuz") {
            descuento = precioSumado * (40 / 100);
            precioLamparasTotal = precioSumado - descuento;
        }
        else if (marca != "ArgentinaLuz") {
            descuento = precioSumado * (30 / 100);
            precioLamparasTotal = precioSumado - descuento;
        }
    }
    else if (lamparasCompradas == 4) {
        if (marca == "ArgentinaLuz") {
            descuento = precioSumado * (25 / 100);
            precioLamparasTotal = precioSumado - descuento;
        }
        else if (marca == "FelipeLamparas") {
            descuento = precioSumado * (25 / 100);
            precioLamparasTotal = precioSumado - descuento;
        }
        else {
            descuento = precioSumado * (20 / 100);
            precioLamparasTotal = precioSumado - descuento;
        }
    }
    else if (lamparasCompradas == 3) {
        if (marca == "ArgentinaLuz") {
            descuento = precioSumado * (15 / 100);
            precioLamparasTotal = precioSumado - descuento;
        }
        else if (marca == "FelipeLamparas") {
            descuento = precioSumado * (10 / 100);
            precioLamparasTotal = precioSumado - descuento;
        }
        else {
            descuento = precioSumado * (5 / 100);
            precioLamparasTotal = precioSumado - descuento;
        }*/