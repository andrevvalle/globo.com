<?php


	require('conection.php');

	try {

	$con = Conexao::getConnection();

	$sql = "SELECT * FROM upload";

	$stmt = $con->prepare($sql);                   
	$stmt->execute();

	$fotos = array();

	while ($rs = $stmt->fetch(PDO::FETCH_OBJ)) {

		array_push($fotos, array('id' => $rs->id, 'foto' => $rs->foto));

	}
	
	} catch (PDOException $e) {
		echo "Erro";
	}

	$con = null;

	echo json_encode($fotos);
	
?>