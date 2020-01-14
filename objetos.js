//Nos e puede tener el mismo nombre de variable
var nombreA = 'Abraham'
var nombreY = 'Yuri'
var nombreP = 'Pedro'

//Objeto
 var Persona = {
     nombre: 'Abraham',
     apellido: 'Pacheco',
     edad: 20
 }

function Mayus({nombre}){
    console.log(nombre.toUpperCase())
}

Mayus(Persona)
Mayus({nombre: 'Pepito'})

//Mayus(nombreY)
//Mayus(nombreP)