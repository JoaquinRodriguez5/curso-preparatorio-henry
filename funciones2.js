function CuidadoConElConsoleLog (nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'CuidadoConElConsoleLog' es: " +
        CuidadoConElConsoleLog("Joaquin")
    );
}

function CuidadoConElReturn(nombre) {
    console.log(nombre);
    return nombre;
}


var sumaTres = (x) => {
    return x + 3;
}
