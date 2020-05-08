/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

/**
 * Toggle Menu
 * @type {Element}
 */
let burger = document.querySelector("#burger");
let menu   = document.querySelector("#menu");

burger.addEventListener("click", () => {

    menu.classList.remove("hidden");
})

/**
 * Hidden Menu if scrolling
 * @type {number}
 */
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    if (prevScrollpos !== window.pageYOffset) menu.classList.add("hidden");

    prevScrollpos = window.pageYOffset;
}
