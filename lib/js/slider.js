// JS del Slider 2 Automik Manual Con Query implementado y Contador

$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	var res = "";
	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		//res = res + "el bicho = "+i+'<br>'; ----------------------------------
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//document.getElementById("res").innerHTML = "Numero de slides = "+imgItems+'<br>'+res;---------
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada
		
		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	var vuelta = 0;

	function nextSlider(){
		if( imgPos >= imgItems) { imgPos = imgPos-1; vuelta = 1 } 
		else {
			if (imgPos == 1) { vuelta = 0; }
			if (vuelta == 0) { imgPos++; } 
			else { imgPos--; }
		}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides

		 // Mostramos el Slide seleccionado
		 //document.getElementById("res").innerHTML = "El bicho = "+imgPos;
		$('.slider li:nth-child('+ imgPos +')').fadeIn();


	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});