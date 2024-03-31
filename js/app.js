const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    main.classList.toggle('show-sidebar');
});