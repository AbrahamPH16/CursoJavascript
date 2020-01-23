const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

const onResponse = function(persona){
    console.log(`Hola, mi nombre es ${persona.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,onResponse)
}

//Asincronismo locoooooooooooooo!!!!!!
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)