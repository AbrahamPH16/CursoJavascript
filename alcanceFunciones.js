//Variable de alcance Global
var nombre = 'Abraham' 

function nombreMaayus(n){
    //Variable local
    //n no existe hasta que se llama a la funcion
    n = n.toUpperCase()
    console.log(n)
}

nombreMaayus(nombre) 
//Si la funcion no tiene parametros y se utiliza
//una variable global, modifica una variable que no
//le correspode 


//ALcance gloal window.nombrevariable