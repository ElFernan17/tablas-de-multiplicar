function generarTablas(){
    let contenedor = document.getElementById("idContenedor");

    let contenido = ""

    let resultado = 0

    let multiplicando = 5

    for (let i = 1; i <= 10; i++) {

        resultado = multiplicando * i;

        contenido = contenido + "<div class='fila'>"+"5 × "+ i +" = "+ resultado +"</div>";

        contenedor.innerHTML = contenido;
    }
}