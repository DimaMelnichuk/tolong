/* $(function(){

	$('.tabs__title-item').click(function(e){
		e.preventDefault();

		$('.tabs__title-item').removeClass('tabs__title-item--active');
		$('.tabs__content-item').removeClass('tabs__content-item--active');
		
		$(this).addClass('tabs__content-item--active');
		$(this).addClass('tabs__title-item--active');
		$($(this).attr('href')).addClass('tabs__content-item--active');
	});

	$('.tabs__title-item:first').click();

}); */


document.querySelectorAll('.tabs__title-item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.tabs__title-item').forEach(
			(child) => child.classList.remove('tabs__title-item--active')
		);
		document.querySelectorAll('.tabs__content-item').forEach(
			(child) => child.classList.remove('tabs__content-item--active')
		);

		item.classList.add('tabs__title-item--active');
		document.getElementById(id).classList.add('tabs__content-item--active');
	})
);

document.querySelector('.tabs__title-item').click();