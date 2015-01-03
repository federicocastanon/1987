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
					top: 100,
					overlay: 0.4,
					closeButton: ".modal_close"
				});
		});		
		
	}
	
	var altura = $(".contenidoPrincipal").height() * 1.2;
	//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
	$("#cuerpo").height(altura);
}); 
