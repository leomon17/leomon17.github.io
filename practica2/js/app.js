console.log("HOLA MUNDO 2");
if (navigator.serviceWorker) {
    console.log("soporta el SW");
    //Identificar si estoy en local o en github
   navigator.serviceWorker.register('sw.js')
    navigator.serviceWorker.register('practica2/sw.js')
}else{
    console.log("no soporta");
}
