$(function(){

	/***************** Sticky aside-nav ********************/
	const wrapper = $('#wrapper');
	const contentLeftInner = $("#nav-aside");
	const contentLeftInnerOffset = contentLeftInner.offset().top;

	$(window).scroll(function() {
		const scrolled = $(this).scrollTop();

		if (scrolled > contentLeftInnerOffset)
		{
			wrapper.addClass('aside-fixed--top');
		} else if (scrolled < contentLeftInnerOffset) {
			wrapper.removeClass('aside-fixed--top');
		}

	});

	/***************** nav-aside active ********************/
	$(window).scroll(function(){
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
