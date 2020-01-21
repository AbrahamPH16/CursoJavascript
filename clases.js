// function heredaDe(prototipoHijo,prototipoPadre){
//     var fn = function (){}

//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
//     prototipoHijo.prototype.constructor = prototipoHijo
// }

class Persona {
    constructor(nombre, apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.alturas = altura
     }
     saludar(fn){
          var {nombre,apellido} = this
          console.log(`Hola me llamo ${nombre} ${apellido}`)
          if(fn){
               fn(nombre,apellido)
          }
     }
     soyAlto(){return this.altura > 1.6}
}

class Desarrollador extends Persona{
     constructor (nombre, apellido,altura){
          super(nombre,apellido,altura)
     }
     saludar (fn){ 
          var {nombre,apellido} = this
          console.log(`Hola me llamo ${nombre} y soy desarrolador`)
          if(fn){
               fn(nombre,apellido,true)
          }
     }
}



function responderSaludo(nombre, apellido, esDev){
     console.log(`Buen dia ${nombre} ${apellido}`)
     if (esDev) {
          console.log(`ah mira, no sabia que eras desarrollador`)
     }
}

var Krillin = new Persona('Krillin','Pelon',1.50)
var Goku = new Desarrollador('Goku','Prota',1.70)
var Vegeta = new Persona('Vegeta','Secundario',1.70)

Krillin.saludar();
Goku.saludar(responderSaludo);
Vegeta.saludar(responderSaludo);


// function Persona(nombre, apellido,altura){
//    this.nombre = nombre
//    this.apellido = apellido
//    this.altura = altura
// }

// Persona.prototype.soyAlto = function() { 
    
//     return this.altura > 1.6
// }

// Persona.prototype.saludar = function ()
// {console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)}






//Krillin.saludar()

// function Desarrollador (nombre, apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// }
//heredaDe(Desarrollador,Persona)

// Desarrollador.prototype.saludar = function (){
//     console.log(`Hola me llamo ${this.nombre} y soy desarrolador`)
// }