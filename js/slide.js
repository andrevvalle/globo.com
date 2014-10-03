function SliderAndre(){

	var settings = {
		primeiraImg: function(){
			elemento = $("#slider a:first-child");
			elemento.addClass('ativo');
		},

		slide: function(){
			elemento = $("#slider a.ativo").next();

			if (elemento.length == 0) {
				$("#slider a").removeClass('ativo');
				settings.primeiraImg();
				settings.posicao();
			}else{
				$("#slider a").removeClass('ativo');
				elemento.addClass('ativo');
				var ativo = $("#slider a.ativo");
				settings.posicao();
			};

		},

		proximo: function(){
			clearInterval(intervalo);
			var elemento = $("#slider .ativo").next();

			if (elemento.length == 0) {
				$("#slider a").removeClass('ativo');
				$("#slider a:first-child").addClass('ativo');
				var ativo = $("#slider a.ativo");
				settings.posicao();
			}else{
				$("#slider a").removeClass('ativo');
				elemento.addClass('ativo');
				var ativo = $("#slider a.ativo");
				settings.posicao();
			};

			intervalo = setInterval(settings.slide,4000);
		},

		anterior: function(){
			clearInterval(intervalo);
			var elemento = $("#slider .ativo").prev();
			
			if (elemento.length == 0) {
				$("#slider a").removeClass('ativo');
				$("#slider a:last-child").addClass('ativo');
				var ativo = $("#slider a.ativo");
				settings.posicao();
			}else{
				$("#slider a").removeClass('ativo');
				var ativo = elemento.addClass('ativo');
				settings.posicao();
			};

			intervalo = setInterval(settings.slide,4000);
		},

		posicao: function(){
			var pos = $('#slider a.ativo').index();
			var pos = pos+1
			$('.position').text(pos);
		}
	}

	settings.primeiraImg();

	var intervalo = setInterval(settings.slide,4000);

	$(".set.next").click( function(){
		settings.proximo();
	});
	$(".set.prev").click( function(){
		settings.anterior();
	});

	$(document).ready( function(){
		var total = $('#slider a').length;
		$('.count .total').text(total);
	});

}

SliderAndre();