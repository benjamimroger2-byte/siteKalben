// FORMULÁRIO "FALE COMIGO" → ENVIA DIRETO PARA WHATSAPP

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-number").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !phone || !message) {
        alert("Preencha todos os campos.");
        return;
    }

    const text =
        `Olá, meu nome é ${name}\n` +
        `Contacto: ${phone}\n` +
        `Mensagem: ${message}`;

    const whatsappURL =
        "https://wa.me/244974033986?text=" + encodeURIComponent(text);

    window.open(whatsappURL, "_blank");

    this.reset();
});
