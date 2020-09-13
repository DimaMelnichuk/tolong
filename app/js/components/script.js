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


document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.nav-aside')) {
		content_knowledge.classList.remove('active');
	}
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