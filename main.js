addEventListener(`DOMContentLoaded`, ()=>{
    // Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

    let numero1 =(prompt(`por favor escriba un numero : ` ,95))

    let numero2 =(prompt(`por favor escriba un numero : ` ,50))

    let numero3 =(prompt(`por favor escriba un numero : ` ,20))

    if (numero1 > numero2 && numero1 > numero3 ) {
        console.log(`El numero ${numero1} es el mayor`)
    }
    else if (numero2 > numero1 && numero2 > numero3) {
        console.log(`El numero ${numero2} es el mayor `)
    }
    else {
        console.log(`El numero ${numero3} es el mayor`)
    }


})
