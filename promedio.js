
let datos = [];

function agregarDatos(data){
    datos.push(data);
    return datos;
}

function quitarDatos(){
    datos.pop();
    return datos;
}

// Promedio

function calcularMediaAritmetica(lista) {
    /*
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }
    */

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


// Moda


function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function (elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor) {
           return valorAcumulado[1] - nuevoValor[1]
        }
    );
    const moda = listaArray[listaArray.length - 1];
    return moda
}


// Mediana

function calcularMedianaAritmetica(lista) {
    const listaOrganizada = lista.sort(function(a,b){
      return a-b
    })
    const mitadLista = parseInt(listaOrganizada.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if (esPar(listaOrganizada.length)) {
        const elemento1 = listaOrganizada[mitadLista - 1];
        const elemeneto2 = listaOrganizada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemeneto2,]);

        mediana = promedioElemento1y2;

    } else {
        mediana = listaOrganizada[mitadLista];
    }
    return mediana;
}


function onClicAgregarDatos() {
    let inputValue = parseInt(document.getElementById("inputData").value);

    datos = agregarDatos(inputValue);
    let textoDatos = document.getElementById("imprimirDatos");

    textoDatos.innerText = `${datos}`;
    console.log(datos);
}

function onClicQuitarDatos() {
    let inputValue = parseInt(document.getElementById("inputData").value);

    datos = quitarDatos(inputValue);
    let textoDatos = document.getElementById("imprimirDatos");

    textoDatos.innerText = `${datos}`;
    console.log(datos);
}


function onClickCalcularMMM() {
    const media = calcularMediaAritmetica(datos);
    const moda = calcularModa(datos);
    const mediana = calcularMedianaAritmetica(datos);

    let result = document.getElementById("resultMMM");
    result.innerText = `La media de los datos es ${media},
                        la moda es ${moda},
                        y la mediana es ${mediana}.`
}
