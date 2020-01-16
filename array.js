var goku = {
    nombre: 'kakarato',
    apellido: 'Quien sabe',
    altura: 1.80,
    libros: 20
}

var vegeta = {
    nombre: 'Vegeta',
    apellido: 'tampoco se',
    altura: 1.70,
    libros: 60
}

var krillin = {
    nombre: 'Krillin',
    apellido: 'Menos se',
    altura: 1.20,
    libros: 100
}

var personas = [goku,vegeta,krillin]
//Iteracion
for(var i=0; i < personas.length; i ++){
var persona = personas[i]
console.log(`${persona.nombre} mide ${persona.altura}`)
}
const esAlta = ({altura}) => altura > 1.6
const esBajo = ({altura}) => altura <= 1.6

//Filtrar elementos del array
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBajo)

console.log(personasAltas)
console.log(personasBajas)

//Trasformar array

const pasarAlturaCms = persona => {
    //persona.altura = persona.altura * 100
    //persona.altura *= 100
    return {
        ...persona,
        altura: persona.altura * 100
    }
} 
var personasCms = personas.map(pasarAlturaCms)
console.log(personasCms)

//Reducir un array a un valor
/*
var acum = 0

for (var i = 0; i < personas.length; i++)
{
    acum = acum + personas[i].libros
}

console.log(acum)
*/
const reducer = (acum,{libros}) => acum + libros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
