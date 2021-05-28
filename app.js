const openBtn = document.getElementById('open-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.fa-times-circle');


openBtn.addEventListener('click', function (e) {
    modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function (e) {
    modal.classList.remove('show-modal');
});