function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

let raio = 5;
console.log("A área do círculo é: " + calcularAreaCirculo(raio).toFixed(2));
