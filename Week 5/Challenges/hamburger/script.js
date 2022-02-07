const nav = document.getElementById('nav');

const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
});