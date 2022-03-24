
let who = ['El perro','Mi loro','Mi hermana','Mi hijo'];
let action = ['se comió','orino','se trago','rompio'];
let what = ['la tarea', 'el proyecto', 'las llaves'];
let when = ['antes de la clase','esta mañana','justo al terminar','en el almuerzo','mientras estudiaba'];

function arregloRandom(arreglo){
    let max = arreglo.length
    let random = Math.random() * max
    random = Math.floor(random)
    return arreglo[random]
}

let excuse = `${arregloRandom(who)} ${arregloRandom(action)} ${arregloRandom(what)} ${arregloRandom(when)}`
console.log(excuse)
