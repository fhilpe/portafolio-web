// Inicializar EmailJS (reemplaza con tu PUBLIC KEY)
(function(){
    emailjs.init("KXFqbGU0beHODEYkL");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_p43qmhs", "template_ngj0zk6", this)
    .then(() => {
        status.innerText = "Mensaje enviado correctamente 👍";
        form.reset();
    }, (error) => {
        status.innerText = "Error al enviar ❌";
        console.log(error);
    });
});