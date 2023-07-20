// Array para almacenar las actividades
const actividades = [];

// Función para agregar una actividad
function agregarActividad(nombre, precioPorMes) {
    const actividad = { nombre, precioPorMes };
    actividades.push(actividad);
}

// Función para calcular el total de las actividades que seleccionaste
function calcularCostoTotal() {
    let costoTotal = 0;
    for (const actividad of actividades) {
        if (actividad.seleccionada) {
            costoTotal += actividad.precioPorMes * actividad.meses;
        }
    }
    return costoTotal;
}

// Función para mostrar las actividades disponibles
function mostrarActividadesDisponibles() {
    alert("Actividades disponibles:");
    actividades.forEach((actividad, index) => {
        alert(`${index + 1}. ${actividad.nombre} ($${actividad.precioPorMes} por mes)`);
    });
}

// Función para mostrar el resumen de actividades seleccionadas y el costo total en un alert
function mostrarResumen() {
    let resumen = "Resumen de actividades:\n";
    let costoTotal = 0;

    actividades.forEach(actividad => {
        if (actividad.seleccionada) {
            resumen += `${actividad.nombre} - ${actividad.meses} meses - Costo: $${actividad.precioPorMes * actividad.meses}\n`;
            costoTotal += actividad.precioPorMes * actividad.meses;
        }
    });

    resumen += `\nCosto total: $${costoTotal}`;
    alert(resumen);
}

// Agregar las actividades 
agregarActividad("Gimnasio", 4000);
agregarActividad("Natación", 4500);
agregarActividad("Zumba", 3500);
agregarActividad("Funcional", 3700);

// Solicitar al usuario que elija las actividades y la cantidad de meses para cada una
mostrarActividadesDisponibles();
actividades.forEach(actividad => {
    const seleccionada = window.confirm(`¿Desea realizar la actividad ${actividad.nombre}?`);
    if (seleccionada) {
        const meses = parseInt(prompt(`Ingrese la cantidad de meses que desea realizar ${actividad.nombre}:`));
        actividad.seleccionada = true;
        actividad.meses = meses;
    } else {
        actividad.seleccionada = false;
    }
});

// Mostrar resumen de actividades y costo total
mostrarResumen();

