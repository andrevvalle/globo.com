<?php 

include("inc/header.php");
include("inc/menu.php");

?>

<div class="jumbotron">
  <div class="container">
    
    <br><br><br><br>

    <div class="col-lg-12">
      <figure>
          <div id="slider" class="slider">

            <?php
              include('crud/conection.php');

              $con = Conexao::getConnection();

              $sql = "SELECT * FROM upload";

              $stmt = $con->prepare($sql);
              $stmt->execute();

              while ($rs = $stmt->fetch(PDO::FETCH_OBJ)) {

                $id = $rs->id;
                $foto = $rs->foto;
            ?>

              <a href="#" class="efect">
                  <img src="crud/<?php echo $foto ?>" alt="Imagem - Slide">
              </a>

            <?php
              }
            ?>

          </div>

          <span class="set next"></span>
          <span class="set prev"></span>

      </figure>
      <div class="count">
        <p><span class="position">1</span> de <span class="total"></span></p>
      </div>
    </div>

  </div>
</div>

<?php include("inc/footer.php"); ?>