document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.logo i.fa-bars');
    const closeBtn = document.querySelector('.sidebar .close-btn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('show-sidebar');
    });

    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('show-sidebar');
    });
});
