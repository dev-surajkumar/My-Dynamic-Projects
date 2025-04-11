// Since its a copy and we dont actually want to redirect anywhere else so we are just targeting the element and setting it to top home screen.


const navPara = document.querySelectorAll('.nav-links p');
navPara.forEach(nav =>{
    nav.addEventListener('click', ()=> {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const redButton = document.querySelector('.top-info button');
redButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

const blueButton = document.querySelector('.mid-dis button');
blueButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

const giftcard = document.querySelector('.giftdetail span');
giftcard.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

const multiButton = document.querySelectorAll('.box h1, .box p');

multiButton.forEach(option => { 
    option.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const redirect = document.querySelector('.redirect');
redirect.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
