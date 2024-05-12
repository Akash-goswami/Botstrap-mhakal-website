var whatsappBtn = document.querySelector(".btn-whatsapp");

function generateWhatsAppLink() {
    // Replace '1234567890' with your WhatsApp number 
    var phoneNumber = '+91 8949055213';
    var whatsappLink = 'https://wa.me/' + phoneNumber;
    return whatsappLink;
}

whatsappBtn.addEventListener('click', function() {
    var whatsappLink = generateWhatsAppLink();
    
    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
});
