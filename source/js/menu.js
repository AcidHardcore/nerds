"use strict";
var popup = document.querySelector('.page-nav__list');
var burger = document.querySelector('.page-nav__collapse');

//menu and form hide on load page
window.onload = function () {
    popup.classList.add('page-nav__list--close-js');
};
//show menu on tap to burger
burger.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.toggle('page-nav__list--close-js');
});