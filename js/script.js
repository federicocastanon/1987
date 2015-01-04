var inicializado = false;
$(document).ready(function() {

	var a = window.location.toString();
	var name = a.indexOf("portfolio");
	if (name > 0) {
		/*Pagina de portfolio*/
		$(".carrouselBN").slick({
			infinite : true,
			slidesToShow : 2,
			slidesToScroll : 1
		});
		$(".proyecto > div").each(function(index) {
			$(this).height($(this).width() / 1.81);
		});

		$('.masDetalle').each(function(index) {
			$(this).leanModal({
				top : 40,
				overlay : 0.4,
				closeButton : ".modal_close"
			});
			$(this).click(function() {
				var indice = parseInt($(this).attr("indice"));
				if (inicializado) {
						$('.sliderDetalle').slickGoTo(indice);
						$('.sliderFotos').slickGoTo(indice);
				} else {
					$('.sliderDetalle').slick({
						slidesToShow : 1,
						slidesToScroll : 1,
						arrows : false,
						fade : true,
						asNavFor : '.sliderFotos',
						infinite : true,
						initialSlide : indice
					});
					$('.sliderFotos').slick({
						slidesToShow : 1,
						slidesToScroll : 1,
						asNavFor : '.sliderDetalle',
						dots : false,
						centerMode : true,
						focusOnSelect : true,
						infinite : true,
						initialSlide : indice
					});
					inicializado = true;
				}
			});
		});
		$('#wrapperDetalleProyectos').height($(window).height() * 0.9);
		$('#wrapperDetalleProyectos').width($(window).width() * 0.8);

	}

	var altura = $(".contenidoPrincipal").height() * 1.2;
	//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
	$("#cuerpo").height(altura);
});
