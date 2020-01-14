//Estas ya las se pero posiblemente
//me enseñen algo nuevo

var abraham = {
    nombre: 'Abraham',
    apellido: 'Pacheco',
    edad: 20,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    comics: true
}

function Profesion(persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero){
        console.log('Ingeniero')
    }else{console.log('No es Ingeniero')}
    if(persona.cocinero){
        console.log('Cocinero')
    }else{console.log('No es Cocinero')}
    if(persona.cantante){
        console.log('Cantante')
    }else{console.log('No es cantante')}
    if(persona.dj){
        console.log('DJ')
    }else{console.log('No es Dj')}
    if(persona.guitarrista){
        console.log('Guitarista')
    }else{console.log('No es guitarrista')}
    if(persona.comics){
        console.log('Un lector de Comics')
    }else{console.log('No es lector de comics')}
}

var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 17,

}


const edadlegal = 18
//Funcon Normal
function esMayorEdadNormal(persona){
    return persona.edad >= edadlegal
}
//Funcion Anonima
const esMayorDeEdad = function(persona){
     return persona.edad >= edadlegal
}

//Arrow Function
//const esMayorDeEdad2 = persona => persona.edad >= edadlegal
const esMayorDeEdad2 = ({edad}) => edad >= edadlegal



function mayoredad(persona){
    if(esMayorDeEdad2(persona)){
        console.log('Es mayor de edad')
    }else{
        console.log('No es mayor de edad')
    }
}
//! niega la condicion
function permitirAcces(persona){
    if(!esMayorDeEdad2(persona)){
        console.log('Acceso denegado')
    }else{
        console.log('Acceso correcto')
    }
}


//Reto es menor de edad con arrow function que retorne que es 