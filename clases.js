function Persona(nombre, apellido,altura){
   this.nombre = nombre
   this.apellido = apellido
   this.altura = altura
}
Persona.prototype.estatura = function (){
    if(this.altura>1.6){console.log('Eres alto')}
    else{console.log('No eres alto, ni modo, asi naciste xD')}
}
Persona.prototype.saludar = function ()
{console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)}

var Krillin = new Persona('Krillin','Pelon',1.50)
var Goku = new Persona('Goku','Prota',1.70)
var Vegeta = new Persona('Vegeta','Secundario',1.70)

Krillin.saludar()
Krillin.estatura()