const codigoAcceso = "#RRR 2024"
let nombre = prompt ("Decime tu nombre")
let codigoUser = prompt ("¿Cuál es el código de acceso?")

if ((codigoAcceso == codigoUser) || (codigoAcceso =="#RRR 2024")){
    //Acceso al contenido.
    alert ("Bienvenidx ${nombre}")
}else {
    alert ("${nombre}, no tenés acceso a esta información")
}