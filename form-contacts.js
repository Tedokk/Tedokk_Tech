document.getElementById("form-container").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce il ricaricamento della pagina

    emailjs.sendForm("DLlQfaafxVFSMli-s", "template_s440flm", this)
        .then(function() {
            alert("Email sent successfully!");
        }, function(error) {
            alert("Error sending the email: " + error.text);
        });
});