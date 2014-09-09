<?php 
	
	$image = $_FILES['arquivo'];
	$name = $image['name'];
	$type = explode("/", $image['type']);
	$nome = md5($name.time()) . "." . $type[1];
	$tmp  = $image['tmp_name'];
	$uploads = 'uploads/';
	$foto = $uploads.$nome;

	$retorno = "";

	require('conection.php');

	try {

		$con = Conexao::getConnection();

		$sql = "INSERT INTO upload (foto) VALUES ('$foto')";

		$stmt = $con->prepare($sql);                   
		$retorno = $stmt->execute();

		$con = null;

	}catch (PDOException $e) {
		
		$retorno = $e->getCode();

	}

	if($retorno == true) {
		move_uploaded_file($tmp, $foto);
		$resultado = array('return' => 0, 'resultado' => 'Image recorded successfully!');
	}else{
		$resultado = array('return' => 1, 'resultado' => 'Error!' );
	}

	echo json_encode($resultado);


?>