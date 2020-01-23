const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}



function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $.get(url, function(persona){
    console.log(`Hola, mi nombre es ${persona.name}`)

    if(callback){
        callback()
    }
})
}

//Asincronismo locoooooooooooooo!!!!!!
//Con callback perdemos el paralelismo del request
//obtenerPersonaje(1)
//obtenerPersonaje(2)
//obtenerPersonaje(3)

//El infierno de los callback Muajajaja
obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4)
        })
    })
})
