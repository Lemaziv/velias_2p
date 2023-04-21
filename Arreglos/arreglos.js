function calcularPuntaje(arreglo) {
    let puntaje = 0;
    for (let i = 0; i < arreglo.length; i++) {
        const num = arreglo[i];
        if (num === 5) {
            puntaje += 3;
        } else if (num % 2 === 0) {
            puntaje += 2;
        } else if (num !== 7) {
            puntaje += 1;
        }
    }
    return puntaje;
}

console.log(calcularPuntaje([1, 2, 3, 4, 5])); // resultado: 9
console.log(calcularPuntaje([17, 19, 21])); // resultado: 3
console.log(calcularPuntaje([5, 5, 5])); // resultado: 9