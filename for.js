var abraham = {
    nombre: 'Abraham',
    apellido: 'Pacheco',
    edad: 20,
    peso: 50
}

console.log(`Al inicio del año ${abraham.nombre} pesa ${abraham.peso} Kg`)
const diasAño = 365
const incrementoPeso = 0.3
const aumentaPeso = (persona) =>  persona.peso += incrementoPeso
const adelgazar = (persona) => persona.peso -= incrementoPeso

/*
for(i = 1 ; i <= diasAño;i++){
    var random = Math.random()

    if(random < 0.25){
        aumentaPeso(abraham)
    }else if(random < 0.5){
        adelgazar(abraham)
    }
}
*/
const meta = abraham.peso -3
var dia = 0
//Aprenderemos ciclo while c:
const comeMucho = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.4
while(abraham.peso > meta){
    
    if(comeMucho()){
        aumentaPeso(abraham)
    }
    if(deporte()){
        adelgazar(abraham)
    }
    dia += 1
}


console.log(`Pasaron ${dia} dias hasta que ${abraham.nombre} adelgazo`)


