/***************** nav-aside-btn ********************/
let nav_burger = document.querySelector('.nav-aside__burger');
let content_knowledge = document.querySelector('.knowledge__body');
let nav = document.querySelector('.nav-aside');
nav_burger.addEventListener("click", function (e) {
	nav.classList.toggle('active');
	nav_burger.classList.toggle('active');
	content_knowledge.classList.toggle('active');
});