const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}



function obtenerPersonaje(id){
     return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        .get(url, opts, function(data){
            resolve(data)
        })
        .fail(()=> reject(id))
    
    })

}

//Asincronismo locoooooooooooooo!!!!!!
//Con callback perdemos el paralelismo del request
//obtenerPersonaje(1)
//obtenerPersonaje(2)
//obtenerPersonaje(3)

function onError(id){
    console.log(`Ocurrio un error al buscar al personaje ${id}`)
}
obtenerPersonaje(1)
.then(function(personaje){
    console.log(`El personaje 1 es ${personaje.name}`)
})
.catch(onError)




//El infierno de los callback Muajajaja



//Promesas 
//E3 estados
//
//           FULFILLED ------- .then(val => ...)
//(resolve)/                        |
//  PENDING                        |
//(reject) \                       |
//          REJECTED ------- .catch(err => ...)
//
//
//Asi se crea una promesa 
//new Promise(function(resolve,reject){
//  ...  
//}).then(var =>{
//    ..
//})