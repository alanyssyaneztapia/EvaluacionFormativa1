function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("contraseña").value;

    if (nombre === "" || apellido === "" || email === "" || contraseña === "") {
        alert("Completar Campos!! >:(");
        return false;
    }
    return true;
}

document.getElementById("Resultado").textContent = "se inicio sesión";