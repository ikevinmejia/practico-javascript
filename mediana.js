function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

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


