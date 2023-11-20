function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('discord_name').value;
    var mensaje = document.getElementById('mensaje').value;

    // Construir el objeto de datos a enviar
    var datos = {
        content: `Nuevo mensaje de contacto:
        Nombre: ${nombre}
        Email: ${email}
        Mensaje: ${mensaje}`
    };

    var webhookURL = 'WEBHOOK_URL';

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Mensaje enviado con éxito:', data);
    })
    .catch(error => {
        console.error('Error al enviar el mensaje:', error);
    });
}