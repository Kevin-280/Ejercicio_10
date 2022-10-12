//Escribir un programa que imprima los horarios en que sebe tomar los medicamentos un paciente. 
//solicitar al usuario la horaa de la toma inicial (0-23) y la frecuencia de la toma diaria (1-12)


console.log("ingrese la hora incial");
let horario = Number(prompt("ingrese la hora de toma: "))

console.log("Frecuencia");
let frecuencia = Number(prompt("ingrese la frecuencia: "))

if (horario > 5) {
    let suma_total = horario + frecuencia;
    console.log(suma_total)
}
else if (horario > 11) {
    let suma_total = horario + frecuencia;
    console.log(suma_total)
}
else if (horario > 17){
    let suma_total = horario + frecuencia;
    console.log(suma_total)
}
else if (horario > 23){
    let suma_total = horario + frecuencia;
    console.log(suma_total)
}
else {
    console.log("No hay horario ")
};
