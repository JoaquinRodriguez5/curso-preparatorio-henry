//var listaDeCompras = [];
//listaDeCompras[3] = "Tomates";
//listaDeCompras[1] = "Lechuga";

//console.log(listaDeCompras.length);
//var elementoDelArray = listaDeCompras[1];
//console.log(elementoDelArray);

//var colores =  ["amarillo", "azul"];
//colores.push("rojo");
//colores.unshift("verde");
//colores.pop();
//colores.shift();
//console.log(colores);

//var pintores = ["Piccaso", "Velazquez", "Van Gogh", "Dali"];
//var incluyeDali = pintores.includes("Monet");
//console.log(incluyeDali);

//var numeros = [10, 6, 8, 9];
//var cumpleCondicion = numeros.every(num => {
//    return num > 5;
//})
//console.log(cumpleCondicion);

//var palabra = "henri";
//var palabraSeparada = palabra.split("");
//palabraSeparada.pop();
//palabraSeparada.push("y");
//console.log(palabraSeparada);
//var palabraArreglada = palabraSeparada.join("");
//console.log(palabraArreglada);

//var numeros = [1, 2, 3, 4,];
//numeros.forEach((num) => console.log(num));
//numeros.forEach((num) => {
//    if (num === 3) {
//        console.log(num);
//    }
//});
//var masUno = numeros.map((num) => {
//    return num + 1;
//});
//console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// WHILE
var arr = [1, 2, 3, 4, 5];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);