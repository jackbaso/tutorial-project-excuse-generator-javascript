
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

function generarExcusa (){
    return `${arregloRandom(who)} ${arregloRandom(action)} ${arregloRandom(what)} ${arregloRandom(when)}` // esto es igual que "xxx" + "xxx "
} 

console.log(excuse)



window.onload = function(){ // primero me carga toda la pagina y luego funciona esto
    let excusa = document.querySelector("#excuse")
    excusa.innerHTML = generarExcusa()
    document.getElementById('boton').addEventListener("click", function(){
        excusa.innerHTML = `<h3>${generarExcusa()}</h3>`
    })
}
