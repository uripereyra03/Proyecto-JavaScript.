let carrito = "";
let nuevoOperacion = false;

let actividad = prompt("Ingrese el nombre de la actividad que desea realizar: (Gimnasio ($4000 por mes), Natacion($4500 por mes), Zumba($3500 por mes), Funcional($3700 por mes)):");
let cantidad = parseInt(prompt(`Ingrese la cantidad de meses de ${actividad} que desea completar:`));

function haceractividad(actividad, cantidad) {
    do {
        seleccionarActividad(actividad, cantidad);
        nuevoOperacion = confirm("¿Desea ejercer otro tipo de actividad?");
        if (nuevoOperacion) {
            actividad = prompt("Ingrese el nombre de la actividad que desea realizar: (Gimnasio ($4000 por mes), Natacion($4500 por mes), Zumba($3500 por mes), Funcional($3700 por mes)):");
            cantidad = parseInt(prompt(`Ingrese la cantidad de meses de ${actividad} que desea completar:`));
        }
    } while (nuevoOperacion);

    alert(carrito);
}

function seleccionarActividad(actividad, cantidad) {
    switch (actividad.toLowerCase()) {
        case "gimnasio":
            carrito += `Podras hacer Gimnasio durante ${cantidad} meses y tu precio total sera de: $ ${4000 * cantidad} \n`;
            break;
        case "natacion":
            carrito += `Podras hacer Natacion durante ${cantidad} meses y tu precio total sera de: $ ${4500 * cantidad} \n`;
            break;
        case "zumba":
            carrito += `Podras hacer Zumba durante ${cantidad} meses y tu precio total sera de:  $ ${3500 * cantidad} \n`;
            break;
        case "funcional":
            carrito += `Podras hacer Funcional durante ${cantidad} meses y tu precio total sera de: $ ${3700 * cantidad} \n`;
            break;
        default:
            alert("La actividad ingresada no está disponible hasta el momento. Las actividades que le podemos ofrecer son gimnasio, natacion, zumba y funcional. Gracias");
            break;
    }
}

haceractividad(actividad, cantidad);