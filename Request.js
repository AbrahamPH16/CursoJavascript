//import { promises } from "dns"

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
//Paralelo



//var promesas = ids.map(function (id) {
//    return obtenerPersonaje(id)
//})
async function obtenerPersonajes(){
   var ids = [1,2,3,4,5,6,7]
   var promesas = ids.map (id  =>obtenerPersonaje(id))
   try{
   var personajes = await Promise.all(promesas)
   console.log(personajes)
   }catch(id){
      onError(id)
   }
}
//Serie
//obtenerPersonaje(1)
//.then(personaje => {
//    console.log(`El personaje 1 es ${personaje.name}`)
//    return obtenerPersonaje(2)
//})
//.then(personaje => {
//    console.log(`El personaje 2 es ${personaje.name}`)
//    return obtenerPersonaje(3)
//})
//.then(personaje => {
//    console.log(`El personaje 3 es ${personaje.name}`)
//    return obtenerPersonaje(4)
//})
//.then(personaje =>{
//    console.log(`El personaje 4 es ${personaje.name}`)
//    //return obtenerPersonaje(2)
//})
//.catch(onError)

obtenerPersonajes()


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