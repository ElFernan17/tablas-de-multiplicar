function generarTablas(){
    let contenedor = document.getElementById("idContenedor");

    let contenido = ""

    let resultado = 0

    let multiplicando = 1

    for (let i = 1; i <= 10; i++) {

        multiplicando = document.getElementById("idNumero").value;

        resultado = multiplicando * i;

        contenido = contenido + "<div class='fila'>" + multiplicando +" × "+ i +" = "+ resultado +"</div>";

        contenedor.innerHTML = contenido;
    }
}