var x = 4, y = '4'
// == solo compara los valores
// === compara el tipo de dato y el valor

var abraham = {
    nombre: 'Abraham'
}

var otherpeople = abraham

var otrapersona = {
    nombre: 'Abraham'
}
//Colocas en la misma memoria ram a ambos
//si modificas el valor de este el otro 
//se ve afectado
var otrapersona = {
    ...abraham
}