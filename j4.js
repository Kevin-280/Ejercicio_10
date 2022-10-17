//Escribir un programa en javascrit permita imprimir la pantalla n numeros perfectos.
//EL usuario podra indicar cuantos numeros desea ver. Un numero desea ver. Un numero perfectro es aquel que la suma de sus diversos excepto el mismo da como resultado
//el mismo da como resultado el mismo numero.
//ejemplo: para el 6 sus diversos son 1,2,3,6 sumando todas excepto el 6: 1+2+3 = 6,6 es perfecto



let cant_numeros = 4;


let num_divisores = [];


let numeros_perfectos = [];


let numero = 1;

while (true) {

    
    for (let divisor = 1; divisor < numero; divisor++) {
        if (numero%divisor == 0) {
            num_divisores.push(divisor);
        }
    }

    let sum = 0;
    for (let index = 0; index < num_divisores.length; index++) {
        sum = num_divisores[index] + sum;
    }

    if (sum == numero) {
        
        numeros_perfectos.push(numero);
    }

    if (numeros_perfectos.length == cant_numeros) {
        break
    }
    
    num_divisores = [];

  
    numero = numero + 1;
}
console.log("La cantidad de numeros perfectos solicitados fue de: " + cant_numeros + " y son los siguientes")
console.log(numeros_perfectos);

document.write(`<h2> ${numeros_perfectos} </h2>`);
