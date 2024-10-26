//Gerenciamento Centralizado de alt e title de Imagens
const brandName = "Shanti Yoga";
const images = document.querySelectorAll('img[data-brand]');
images.forEach(image => {
    image.setAttribute('alt', brandName);
    image.setAttribute('title', brandName);
});

// Galeria de imagens
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,           
        autoplayTimeout: 3000,    
        responsive: {
            0: { items: 1 },      
            600: { items: 2 },    
            1000: { items: 4 }    
        }
    });
});


