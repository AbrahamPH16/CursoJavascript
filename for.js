var abraham = {
    nombre: 'Abraham',
    apellido: 'Pacheco',
    edad: 20,
    peso: 50
}

console.log(`Al inicio del año ${abraham.nombre} pesa ${abraham.peso} Kg`)
const diasAño = 365
const incrementoPeso = 0.2
const aumentaPeso = (persona) =>  persona.peso += incrementoPeso
const adelgazar = (persona) => persona.peso -= incrementoPeso

for(i = 1 ; i <= diasAño;i++){
    var random = Math.random()
    if(random < 0.25){
        aumentaPeso(abraham)
    }else if(random < 0.5){
        adelgazar(abraham)
    }
}

console.log(`Al final del año ${abraham.nombre} pesa ${abraham.peso.toFixed(1)} Kg`)


