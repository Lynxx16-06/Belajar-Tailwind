const navbar = document.querySelector('nav');
document.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});

// button
const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('Button clicked');
});