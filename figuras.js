// Código Cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
};

// console.log("El perímtero del cuadrado mide:" + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;

};
// console.log("El area del cuadrado mide:" + areaCuadrado + "cm2");

console.groupEnd();

// Código Triángulo
console.group("Triángulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const hTriangulo = 5.5;

// console.log("Los lados del triángulo miden:" 
//             + ladoTriangulo1 
//             + "cm,"
//             + ladoTriangulo2 
//             + "cm,"
//             + baseTriangulo
//             + "cm."
//         );

// console.log("La altura del triangulo mide:" + hTriangulo + "cm");

function perimetroTriangulo(ladot1, ladot2, base) {
    return ladot1 + ladot2 + base;
};
// console.log("El perímtero del cuadrado mide:" + perimetroTriangulo + "cm");

function areaTriangulo(base, htriangle) {
    return (base * htriangle) / 2;
};
// console.log("El area del triangulo mide:" + areaTriangulo + "cm2");

console.groupEnd();

// Código Circulos

console.group("Circulos")
// const radio = 4;
// const diametro = radio * 2;
const PI = Math.PI;
// const circunferencia = diametro * PI;
// const area = (radio * radio) * PI;

function diametroCirculo(radio) {
    return radio * 2;
};

function circunferencia(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo(radio) {
    return (radio * radio) * PI;
};


// console.log("El radio del círculo es:" 
//             + radio 
//             + "cm,"    
//         );

// console.log("El diametro del círculo es:" + diametro + "cm");

// console.log("La circunferencia del círculo es:" + circunferencia + "cm");

// console.log("El area del circulo mide:" + area+ "cm2");

// console.groupEnd();

