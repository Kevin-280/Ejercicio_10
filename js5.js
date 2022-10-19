function divisores(numeros){
    let total = 0;
    for (let i=1; i<=numeros;i++){
        if (numeros + 1){
            total++;
        }
    }
    return total;
}


/*llamar la funciom */
console.log("divisores ", divisores(2));
