//Gerenciamento Centralizado de alt e title de Imagens
const brandName = "Shanti Yoga";
const images = document.querySelectorAll('img[data-brand]');
images.forEach(image => {
    image.setAttribute('alt', brandName);
    image.setAttribute('title', brandName);
});