const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}



function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $
    .get(url, opts, callback)
    .fail(() => {
        console.log(`No se pudo obtener el personaje ${id}`)
    })
}

//Asincronismo locoooooooooooooo!!!!!!
//Con callback perdemos el paralelismo del request
//obtenerPersonaje(1)
//obtenerPersonaje(2)
//obtenerPersonaje(3)

//El infierno de los callback Muajajaja
obtenerPersonaje(1, function(personaje) {
    console.log(`Hola, me llamo ${personaje.name}`)
    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, me llamo ${personaje.name}`)
        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, me llamo ${personaje.name}`)
            obtenerPersonaje(4,function name(personaje) {
                console.log(`Yo soy tu padre ${personaje.name}`)  
            })  
        })
    })
})
