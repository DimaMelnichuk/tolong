/***************** Menu-btn ********************/
let menu_burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let menu_lock = document.querySelector('body');
menu_burger.addEventListener("click", function (e) {
	menu.classList.toggle('active');
	menu_burger.classList.toggle('active');
	menu_lock.classList.toggle('lock');
}); 


/***************** WebP ********************/
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});

/***************** loaded ********************/
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('loaded');
}

/***************** ibg adaptive inline bg ********************/
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}		
	}
}
ibg();
$(function(){

	/***************** nav-aside active ********************/
	jQuery(window).scroll(function(){
		var $sections = $('.articles__item');
		$sections.each(function(i,el){
	  var top  = $(el).offset().top-100;
	  var bottom = top +$(el).height();
	  var scroll = $(window).scrollTop();
	  var id = $(el).attr('id');
	 if( scroll > top && scroll < bottom){
			$('a.nav-aside__list-link--active').removeClass('nav-aside__list-link--active');
		$('a[href="#'+id+'"]').addClass('nav-aside__list-link--active');

	  }
 })
});

/***************** Scroll to ********************/
$(".nav-aside__list-link").on("click","a", function (event) {
	  event.preventDefault();
	  var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
	  $('body,html').animate({scrollTop: top}, 100);
 });
});
/***************** nav-aside-btn ********************/
let nav_burger = document.querySelector('.nav-aside__burger');
let content_knowledge = document.querySelector('.knowledge__body');
let nav = document.querySelector('.nav-aside');
nav_burger.addEventListener("click", function (e) {
	nav.classList.toggle('active');
	nav_burger.classList.toggle('active');
	content_knowledge.classList.toggle('active');
});

/***************** Sticky aside-nav ********************/
const wrapper = $('#wrapper');
const contentLeftInnerOffset = $("#nav-aside").offset().top;
const asideFixedTopClassname = 'aside-fixed--top';

$(window).scroll(function() {
	const scrolled = $(this).scrollTop();

	if (scrolled > contentLeftInnerOffset)
	{
		wrapper.addClass('aside-fixed--top');
	} else if (scrolled < contentLeftInnerOffset) {
		wrapper.removeClass('aside-fixed--top');
	}
});