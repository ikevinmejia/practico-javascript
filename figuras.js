// Código del cuadrado

function perimetroCuadrado (lado){
    return lado * 4;
}
function areaCuadrado (lado){
    return lado * lado
}


// Código del tríangulo

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura)/2
}

// Código altura triángulo isósceles

function alturaIsosceles(lado1=0, lado2=0, base=0) {
    if ((lado1 === lado2) && (lado1 != base)) {
        return Math.sqrt((lado1**2)-((base**2)/(4)))
    }
    else {
        return alert("No es un triángulo isósceles")
    }
}


// Código del circulo


const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

function areaCirculo(radio) {
    return PI * (radio*radio);
}


// Desde aquí se intectarua con HTML

// Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const squareResult = document.getElementById("squareResult");
    squareResult.innerText = `El perímetro del cuadrado son: ${perimetro} m`
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const squareResult = document.getElementById("squareResult");
    squareResult.innerText = `El área del cuadrado son: ${area} m^2`
}

// Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTrianguloBase");

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    const trianguleResult = document.getElementById("trianguleResult");
    trianguleResult.innerText = `El perímetro del triángulo son ${perimetro} m.`
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputTrianguloBase");
    const input4 = document.getElementById("inputTrianguloAltura")
    const base = parseInt(input3.value);
    const altura = parseInt(input4.value);

    const area = areaTriangulo(base, altura);
    const trianguleResult = document.getElementById("trianguleResult");
    trianguleResult.innerText = `El área del triángulo son ${area} m^2.`
}

// Triángulo Isósceles

function calcularAlturaIsosceles() {
    const input = document.getElementById("inputLadoIsosceles");
    const input2 = document.getElementById("inputLado2Isosceles")
    const input3 = document.getElementById("inputBaseIsosceles");

    const lado = parseInt(input.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);

    const altura = alturaIsosceles(lado, lado2, base);
    const isosResult = document.getElementById("isosResult");
    isosResult.innerHTML = `La altura del triángulo isosceles es de ${altura} m.`
}

// Círculo

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");

    const radio = parseInt(input.value);

    const perimetro = perimetroCirculo(radio);
    const circleResult = document.getElementById("circleResult");
    circleResult.innerHTML = `El perímetro del círculo son ${perimetro} m.`
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");

    const radio = parseInt(input.value);

    const area = areaCirculo(radio);
    const circleResult = document.getElementById("circleResult");
    circleResult.innerHTML = `El área del círculo son ${area} m^2.`
}
