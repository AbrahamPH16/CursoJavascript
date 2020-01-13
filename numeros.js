var edad = 27;
//Incrementar
//edad = edad + 1;
edad += 1;

var peso = 75;
//Decremento
//peso = peso - 1;
peso -= 2;

var sandwich = 1;

peso = peso + sandwich;

var jugarAlFutbol = 3;

peso -= jugarAlFutbol;

var precioVino = 200.3;

var total = precioVino * 3 //No es preciso
//Se sabe el total de los decimales
var totalBien = precioVino * 100 * 3 / 100
//Redondear
var totalConMath = Math.round(precioVino * 100 * 3) / 100
//Con ciertos decimales
var totalStr = total.toFixed(3)
//pasar a float un string
var totalParse = parseFloat(totalStr)


var pizza = 8
var personas = 2
var porciones = pizza / personas