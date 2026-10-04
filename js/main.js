// 1. Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Menú para celular
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  // toggle() agrega la clase si no está y la quita si está; devuelve true si quedó agregada
  const isOpen = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Cerrar el menú al elegir una opción, para que no tape el contenido
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
