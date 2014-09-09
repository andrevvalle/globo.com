<?php 

	$id = $_POST['id'];
	$retorno = "";

	require('conection.php');

	try {

		$con = Conexao::getConnection();
		
		$sql = "SELECT * FROM upload WHERE id=$id";

		$stmt = $con->prepare($sql);                   
		$stmt->execute();
		$rs = $stmt->fetch(PDO::FETCH_OBJ);

		$nome_foto = $rs->foto;

		unlink($nome_foto);

		$sql = "DELETE FROM upload WHERE id = $id";

		$stmt = $con->prepare($sql);                   
		$retorno = $stmt->execute();

	} catch (PDOException $e) {
		
		$retorno = $e->getCode();

	}

		$con = null;

	if ($retorno == 1) {
		$resultado = array('resultado' => 'Picture deleted successfully!' );	
	}else{
		$resultado = array('resultado' => 'Error!' );
	}

	echo json_encode($resultado);

?>