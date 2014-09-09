<?php 

	require('conection.php');

	$con = Conexao::getConnection();

	$id = $_POST['id_image'];
	
	$sql = "SELECT * FROM upload WHERE id=$id";

	$stmt = $con->prepare($sql);                   
	$stmt->execute();

	$fotos = array();

	$rs = $stmt->fetch(PDO::FETCH_OBJ);

	$nome_foto = explode("/", $rs->foto);
	$nome_foto = $nome_foto[1];
	
	$nome_foto = explode(".", $nome_foto);
	$nome_foto = $nome_foto[0];


	$image = $_FILES['arquivo'];
	$name = $image['name'];
	$type = explode("/", $image['type']);
	$nome = $nome_foto . "." . $type[1];
	$tmp  = $image['tmp_name'];
	$uploads = 'uploads/';
	$foto = $uploads.$nome;

	$con = null;

	if(move_uploaded_file($tmp, $foto)) {
		$resultado = array('resultado' => 'Image recorded successfully!' );
	}

	echo json_encode($resultado);

?>