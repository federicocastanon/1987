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
		var mayorAltura = 200;
		$(".proyecto").each(function(index) {
			$(this).find('div').height($(this).find('div').width() / 1.81);
			var alturaActual = $(this).height();
			if (alturaActual > mayorAltura) {
				mayorAltura = alturaActual;
			}
		});

		$('#wrapperDetalleProyectos').height($(window).height() * 0.9);
		$('#wrapperDetalleProyectos').width($(window).width() * 0.8);

		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				$("#lean_overlay").trigger("click");
			}
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
					$('.sliderFotos').unslick();
					var nuevaGaleria = $('#galeria' + indice).html();
					$('.sliderFotos').html(nuevaGaleria);
					$('.sliderFotos').slick({
						slidesToShow : 1,
						slidesToScroll : 1,
						dots : false,
						centerMode : true,
						focusOnSelect : true,
						infinite : true
					});
				} else {
					$('.sliderDetalle').slick({
						slidesToShow : 1,
						slidesToScroll : 1,
						arrows : false,
						fade : true,
						initialSlide : indice
					});
					var nuevaGaleria = $('#galeria' + indice).html();
					$('.sliderFotos').html(nuevaGaleria);
					$('.sliderFotos').slick({
						slidesToShow : 1,
						slidesToScroll : 1,
						dots : false,
						centerMode : true,
						focusOnSelect : true,
						infinite : true
					});
					inicializado = true;
				}
			});
		});
		$(".slick-list").height(mayorAltura * 1.1);
		//$(".slick-track").height(mayorAltura * 1.1);
		$("#cuerpo").height(mayorAltura * 1.3);
	} else {
		var altura = $(".contenidoPrincipal").outerHeight();
		//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
		$("#cuerpo").height(altura);
	}

});
