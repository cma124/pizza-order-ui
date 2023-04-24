// hamburger menu for all html
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('mt-5');
    menu.classList.toggle('h-48');
});

// filter for menu.html
const filterBtn = document.querySelector('#filter-btn');
const filterCloseBtn = document.querySelector('#filter-close-btn');
const filter = document.querySelector('#filter');

if (filterBtn) {
    filterBtn.addEventListener('click', () => {
        filter.classList.remove('-translate-x-full');
    });
}

if (filterCloseBtn) {
    filterCloseBtn.addEventListener('click', () => {
        filter.classList.add('-translate-x-full');
    });
}
