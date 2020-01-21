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
     saludar(){console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)}
     soyAlto(){return this.altura > 1.6}
}

class Desarrollador extends Persona{
     constructor (nombre, apellido,altura){
          super(nombre,apellido,altura)
     }
     saludar (){ console.log(`Hola me llamo ${this.nombre} y soy desarrolador`)}
}


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




//var Krillin = new Persona('Krillin','Pelon',1.50)
//var Goku = new Persona('Goku','Prota',1.70)
//var Vegeta = new Persona('Vegeta','Secundario',1.70)

//Krillin.saludar()

// function Desarrollador (nombre, apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// }
//heredaDe(Desarrollador,Persona)

// Desarrollador.prototype.saludar = function (){
//     console.log(`Hola me llamo ${this.nombre} y soy desarrolador`)
// }