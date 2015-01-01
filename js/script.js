$(document).ready(function() {

	var altura = $(".contenidoPrincipal").height() * 1.2;
	//el cuerpo crece con el contenido, al wrapper hay que hacerlo crecer
	$("#cuerpo").height(altura);
	var a = window.location.toString();
	var name = a.indexOf("portfolio");
	if (name > 0) {
		$(".carrouselBN").slick({
			infinite : true,
			slidesToShow : 2,
			slidesToScroll : 1
		});
	}
}); 