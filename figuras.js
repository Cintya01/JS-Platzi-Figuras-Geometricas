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
    return (ladot1 + ladot2 + base);
};
// console.log("El perímtero del cuadrado mide:" + perimetroTriangulo + "cm");

function areaTriangulo(base, htriangle) {
    return (base * htriangle) / 2;
};

function hTriangulo(lado1, lado2, base) {
    if (lado1!==lado2){
        alert("Triangulo no es Isoceles")
    }else {
        return (Math.sqrt((lado1 * lado2) - ((base * base) / 4)));
    }
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

console.groupEnd();

//HTML Here

//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);    
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    

    const perimetroTriangle = perimetroTriangulo(value1, value2, value3);
    alert(perimetroTriangle);
}

function calcularAreaTriangulo(){
    const input4 = document.getElementById("inputTriangulo4");
    const input3 = document.getElementById("inputTriangulo3");

    const value4 = Number(input4.value);
    const value3 = Number(input3.value);
    

    const areaTriangle = areaTriangulo(value4, value3);
    alert(areaTriangle);
}


function calcularHTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    

    const hTriangle = hTriangulo(value1, value2, value3);
    alert(hTriangle);
}

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = circunferencia(value);
    alert(perimetro);    
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

