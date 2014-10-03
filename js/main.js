$(document).ready(function($) {

	if ($('#slider a').length == 0) {
		var imagem = '<a href="#" class="efect"><img src="http://dummyimage.com/800x400/000/fff.jpg&text=Andr%C3%A9+Valle+-+Nenhuma+imagem+cadastrada" alt="Imagem - Slide"></a>'
		$('#slider').append(imagem);
		$('.count p').text('Cadastre imagens no slide.');
	};

	$("#form_insert").submit(function(e) {
		e.preventDefault();

		if ($("#form_insert input[type=file]").val() == "") {

			$('.alert').remove();

			elemento = "<div class='alert alert-danger msg' role='alert'>Select an image!</div>"

			$('#form_insert').after(elemento);

			$('.alert').fadeIn();
			setTimeout(function() {
				$('.alert').fadeOut();
			}, 2000);

		} else {
			var formData = new FormData($(this)[0]);

			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: 'crud/insert.php',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,

				success: function(data) {

					$('#form_insert').wrap('<form>').trigger('reset');

					var resultado = data.resultado;

					$('.alert').remove();

					if (data.return === 0) {
						elemento = "<div class='alert alert-success msg' role='alert'>" + resultado + "</div>"
					} else {
						elemento = "<div class='alert alert-danger msg' role='alert'>" + resultado + "</div>"
					};

					$('#form_insert').after(elemento);

					$('.alert').fadeIn();
					setTimeout(function() {
						$('.alert').fadeOut();
					}, 2000);

				}

			});
		};

	});

});

$('#listar').click(function(event) {

	$.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'crud/select.php',
		async: true,
		data: "",
		success: function(response) {

			$('#thead').next().remove();

			var tbody = $('<tbody></tbody>');
			$('#thead').after(tbody);

			$.each(response, function(i, item) {
				tr = $('#thead').next().append('<tr id="' + item.id + '"><th>' + item.id + '</th><th><img src="crud/' + item.foto + '" alt="foto ' + item.id + '" width="40" height="30"></th><th class="nome">' + item.foto + '</th><th><input type="button" id="del" value="x" onClick="funcEdit(' + item.id + ')" /></th><th><input type="button" id="del" value="x" onClick="funcDel(' + item.id + ')" /></th></tr>');
			});
		}
	});

});

function funcDel(id) {

	var data = {
		id: id
	};

	$.ajax({
		type: 'POST',
		dataType: 'json',
		url: 'crud/delete.php',
		async: true,
		data: data,
		success: function(data) {

			var resultado = data.resultado;

			$('.alert').remove();

			var elemento = "<div class='alert alert-success msg' role='alert'>" + resultado + "</div>"

			$('#listar').after(elemento);

			$('.alert').fadeIn();
			setTimeout(function() {
				$('.alert').fadeOut();
			}, 2000);

			$('input').closest('#' + id).fadeOut('slow', function() {
				$(this).remove();
			});

		}
	});
}

function funcEdit(id) {

	$('#form_insert').hide();
	$('#form_edit').show();
	$('#id_image').val(id);

	$("#form_edit").submit(function(e) {
		e.preventDefault();

		if ($("#form_edit input[type=file]").val() == "") {

			$('.alert').remove();

			elemento = "<div class='alert alert-danger msg' role='alert'>Select an image!</div>"

			$('#form_insert').after(elemento);

			$('.alert').fadeIn();
			setTimeout(function() {
				$('.alert').fadeOut();
			}, 2000);

		} else {

			var formData = new FormData($(this)[0]);

			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: 'crud/edit.php',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function(data) {

					var resultado = data.resultado;

					$('.alert').remove();

					var elemento = "<div class='alert alert-success msg' role='alert'>" + resultado + "</div>"

					$('#listar').after(elemento);

					$('.alert').fadeIn();

					setTimeout(function() {
						$('.alert').hide();
						location.reload();
					}, 1000);

				}

			});

		}


	});

	$("#new").click(function(e) {
		e.preventDefault();
		$('#form_edit').hide();
		$('#form_insert').show();
	});

}