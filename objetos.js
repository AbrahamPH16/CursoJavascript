//Nos e puede tener el mismo nombre de variable
var nombreA = 'Pedro'


//Objeto
 var Persona = {
     nombre: 'Pedro',
     apellido: 'Pacheco',
     edad: 20
 }
  
 var yuri = {
     nombre: 'Anonimo',
     apellido: 'Cladificado',
     edad: 22
 }

 var said = {
     nombre: 'Goku',
     apellido: 'No tengo',
     edad: 15
 }

function Mayus(persona){
    //
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

Mayus(Persona)
Mayus({nombre: 'Pepito'})

//Mayus(nombreY)
//Mayus(nombreP)

function saludo({nombre,edad}){
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

saludo(said)
saludo(yuri)