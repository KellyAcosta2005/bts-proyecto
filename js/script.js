document.getElementById('btnEnviar').addEventListener('click', function() {
    const nombre = document.getElementById('userName').value;

    if (nombre.trim() !== "") {
        alert(`¡Bienvenid@ Estimad@, ${nombre}!\n\nBTS TE ESTÁ ESPERANDO!!!`);
        
        document.getElementById('userName').value = "";
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
});