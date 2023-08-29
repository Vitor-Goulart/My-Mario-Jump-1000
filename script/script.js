const Mario = document.querySelector('.Mario')

const pulo = function () {
    Mario.classList.add("pulo");
    setTimeout (function () {
    Mario.classList.remove("pulo");
}, 500);
}




document.addEventListener('keydown', pulo);