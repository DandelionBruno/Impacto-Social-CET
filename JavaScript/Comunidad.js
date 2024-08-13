//Defino el año de manera constante
const anio = 2024
//Pido datos al usuario
let nombre = prompt("Ingresá tu nombre")
let apellido = prompt( nombre + "Ingresá tu apellido")
let nombreCompleto = prompt ( nombre + apellido)
alert( "¡Hola!", nombreCompleto)
let anioNacimiento = prompt("¿En qué año naciste?")
// Calculo la edad del usuario
let edad = anio - anioNacimiento 
// Lanzo el mensaje final con toda la información
alert(nombre + " " + apellido + " según mis cuentas tenés " + edad + " años.")


