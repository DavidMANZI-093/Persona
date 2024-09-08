// --- Loading Script --- //
const logo = document.querySelector('.logo');
const placeHolder = document.querySelector('.placeholder');
const image_url = window.getComputedStyle(logo).backgroundImage.slice(5, -2); // Trying to extract the logo's url
const ghost = document.querySelector('.ghost');
const p_logo = new Image();

p_logo.src = image_url;

p_logo.addEventListener('load', () => {
    placeHolder.remove();
});

// --- EOS --- //

const progress = document.querySelector('.progress');

console.log(progress);