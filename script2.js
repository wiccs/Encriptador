

let texto = '';

let datos = '';

let x = 0;
let y = 0;
let z = 0;
let xy = 0;
let xyz = 0;

function escribir(etiqueta, texto) {
    estructuraHTML = document.querySelector(etiqueta);
    estructuraHTML.innerHTML = texto;
}

//FuncionesPrimarias------------------------------------------------------------------------------------------------------------------------------------------------------------


function encriptar() {

    let e = 'enter';
    let i = 'imes';
    let a = 'ai';
    let o = 'ober'
    let u = 'ufat'

    let encriptacion = '';
    texto = document.getElementById('DatosUsuario').value;
    let arreglo = convertirArrayXcaracter(texto);
    for (let ii = 0; ii < arreglo.length; ii++) {

        if (arreglo[ii].includes('e')) {

            arreglo[ii] = e;
        }

        if (arreglo[ii].includes('i')) {
            arreglo[ii] = i;
        }
        if (arreglo[ii].includes('a')) {
            arreglo[ii] = a;
        }

        if (arreglo[ii].includes('o')) {
            arreglo[ii] = o;
        }
        if (arreglo[ii].includes('u')) {
            arreglo[ii] = u;
        }

        encriptacion = encriptacion + arreglo[ii];
    }
    console.log(encriptacion);
    console.log(`el tamaño del arreglo es: ${arreglo.length}`);
    escribir('p', encriptacion)
    document.getElementById('copiar').removeAttribute('disabled');
    document.getElementById('ocultarImagen').style.display = 'none';


}



function desencriptar() {
    arregloModificado = [];
    datos = document.getElementById('DatosUsuario').value;//Obtenemos la entrada del usuario.
    let arreglo = convertirArrayXpalabra(datos);

    eliminarLlaveA(arreglo);
    eliminarLlaveE(arreglo);
    eliminarLlaveI(arreglo);
    eliminarLlaveO(arreglo);
    eliminarLlaveU(arreglo);

    arreglo = arreglo.join(' ');
    console.log(arreglo)

    document.getElementById('ocultarImagen').style.display = 'none';


    escribir('p', arreglo);
    document.getElementById('copiar').removeAttribute('disabled');

}

//FuncionesSecundarias-----------------------------------------------------------------------------------------------------------------------------------------------------------

function convertirArrayXcaracter(texto) {
    let arregloAConvertir = texto.split('');
    return arregloAConvertir;
}


function convertirArrayXpalabra(texto) {
    let arregloAConvertir = texto.split(" ");
    return arregloAConvertir;


}
function eliminarLlaveA(arreglo) {
    let textoDesencriptado = [];
    let arregloIndices = [];
    for (let index = 0; index < arreglo.length; index++) {  //Con este for recorremos cada palabra ingresada por el usuario.
        let A = arreglo[index].indexOf('ai'); //Con index0f buscamos las llaves. 
        while (A !== -1) { //Mientras sigan existiendo llaves 'ai' vamos a iterar. 
            let arregloAuxiliar = arreglo[index].split(''); // Convertir la cadena en un arreglo de caracteres
            arregloAuxiliar.splice(A, 2, 'a'); // Reemplazar 'ai' por 'e' en el arreglo de caracteres
            arreglo[index] = arregloAuxiliar.join(''); // Unir los caracteres de nuevo en una cadena
            arregloIndices.push(A);
            A = arreglo[index].indexOf('ai');//Buscamos mas llaves ai.
        }
        console.log(arreglo[index]);
        textoDesencriptado.push(arreglo[index]);
        console.log(textoDesencriptado)

    }

    // textoDesencriptado = textoDesencriptado.join(' ');
    arreglo = textoDesencriptado
    console.log(arreglo);
    return arreglo;
}

function eliminarLlaveE(arreglo) {
    let textoDesencriptado = [];
    let arregloIndices = [];
    for (let index = 0; index < arreglo.length; index++) {  //Con este for recorremos cada palabra ingresada por el usuario.
        let A = arreglo[index].indexOf('enter'); //Con index0f buscamos las llaves. 
        while (A !== -1) { //Mientras sigan existiendo llaves 'enter' vamos a iterar. 
            let arregloAuxiliar = arreglo[index].split(''); // Convertir la cadena en un arreglo de caracteres
            arregloAuxiliar.splice(A, 5, 'e'); // Reemplazar 'enter' por 'e' en el arreglo de caracteres
            arreglo[index] = arregloAuxiliar.join(''); // Unir los caracteres de nuevo en una cadena
            arregloIndices.push(A);
            A = arreglo[index].indexOf('enter');//Buscamos mas llaves 'enter'.
        }
        console.log(arreglo[index]);
        textoDesencriptado.push(arreglo[index]);
        console.log(textoDesencriptado)

    }

    textoDesencriptado = textoDesencriptado.join(' ');
    arreglo = textoDesencriptado
    return arreglo;

}

function eliminarLlaveI(arreglo) {
    let textoDesencriptado = [];
    let arregloIndices = [];
    for (let index = 0; index < arreglo.length; index++) {  //Con este for recorremos cada palabra ingresada por el usuario.
        let A = arreglo[index].indexOf('imes'); //Con index0f buscamos las llaves. 
        while (A !== -1) { //Mientras sigan existiendo llaves 'imes' vamos a iterar. 
            let arregloAuxiliar = arreglo[index].split(''); // Convertir la cadena en un arreglo de caracteres
            arregloAuxiliar.splice(A, 4, 'i'); // Reemplazar 'imes' por 'i' en el arreglo de caracteres
            arreglo[index] = arregloAuxiliar.join(''); // Unir los caracteres de nuevo en una cadena
            arregloIndices.push(A);
            A = arreglo[index].indexOf('imes');//Buscamos mas llaves 'imes'.
        }
        console.log(arreglo[index]);
        textoDesencriptado.push(arreglo[index]);
        console.log(textoDesencriptado)

    }

    // textoDesencriptado = textoDesencriptado.join(' ');
    arreglo = textoDesencriptado
    console.log(arreglo);
    return arreglo;
}

function eliminarLlaveO(arreglo) {
    let textoDesencriptado = [];
    let arregloIndices = [];
    for (let index = 0; index < arreglo.length; index++) {  //Con este for recorremos cada palabra ingresada por el usuario.
        let A = arreglo[index].indexOf('ober'); //Con index0f buscamos las llaves. 
        while (A !== -1) { //Mientras sigan existiendo llaves 'ober' vamos a iterar. 
            let arregloAuxiliar = arreglo[index].split(''); // Convertir la cadena en un arreglo de caracteres
            arregloAuxiliar.splice(A, 4, 'o'); // Reemplazar 'ober' por 'o' en el arreglo de caracteres
            arreglo[index] = arregloAuxiliar.join(''); // Unir los caracteres de nuevo en una cadena
            arregloIndices.push(A);
            A = arreglo[index].indexOf('ober');//Buscamos mas llaves ober.
        }
        console.log(arreglo[index]);
        textoDesencriptado.push(arreglo[index]);
        console.log(textoDesencriptado)

    }

    // textoDesencriptado = textoDesencriptado.join(' ');
    arreglo = textoDesencriptado
    console.log(arreglo);
    return arreglo;
}

function eliminarLlaveU(arreglo) {
    let textoDesencriptado = [];
    let arregloIndices = [];
    for (let index = 0; index < arreglo.length; index++) {  //Con este for recorremos cada palabra ingresada por el usuario.
        let A = arreglo[index].indexOf('ufat'); //Con index0f buscamos las llaves. 
        while (A !== -1) { //Mientras sigan existiendo llaves 'ai' vamos a iterar. 
            let arregloAuxiliar = arreglo[index].split(''); // Convertir la cadena en un arreglo de caracteres
            arregloAuxiliar.splice(A, 4, 'u'); // Reemplazar 'ai' por 'e' en el arreglo de caracteres
            arreglo[index] = arregloAuxiliar.join(''); // Unir los caracteres de nuevo en una cadena
            arregloIndices.push(A);
            A = arreglo[index].indexOf('ufat');//Buscamos mas llaves ai.
        }
        console.log(arreglo[index]);
        textoDesencriptado.push(arreglo[index]);
        console.log(textoDesencriptado)

    }

    arreglo = textoDesencriptado
    console.log(arreglo);
    return arreglo;
}

function copy() {
    let textito = '';
    textito = document.getElementById('salida').innerText;
    alert('Textito copiado!')
    navigator.clipboard.writeText(textito);//Este metodo recibe como parametro el texto a guardar en el portapapeles ;)
    escribir('p', '');
    document.getElementById('ocultarImagen').style.display = 'block';
    let input = document.getElementById('DatosUsuario');
    if (input) {
        input.value = "";
    }

};





