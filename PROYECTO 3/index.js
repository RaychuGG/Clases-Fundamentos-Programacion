const list = ["Ana",88,"Carlos", 76, "Karina",  63];

let suma = 0;
let cantidad = 0;

let aprobados = [];
let reorobados = [];
let listaTransformada = [];

for (let i = 0; i < list.length; i += 2) {
    let nombre = list [i]
    let nota = list [i + 1];

    suma += nota;
    cantidad ++;

    if (nota >= 70) {
        aprobados.push(nombre);
    } else {
        reprobados.push(nombre);
    }

    let letra = "";

    if (nota >= 95 ) {
        letra = "A";
    } else if (nota >= 90) {
        letra = "B";
    } else if (nota >= 80) {
        letra = "C";
    } else if (nota >= 70) {
        letra = "D";
    } else {
        letra = "F";
    }

    listaTransformada.push(nombre);
    listaTransformada.push(letra);

    console.log("La calificación de " + nombre + "es" + letra);
    }

let promedio = suma / cantidad;
promedio = promedio.toFixed(2);

console.log("El promedio de calificaciones es: " + promedio);
console.log("Los estudiantes que aprobaron son " + aprobados.join(","));
console.log("Los estudiantes que no aprobaron son:" + reorobados.join(,));
console.log("La lista transformada es:", listaTransformada);