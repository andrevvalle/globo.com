<?php 

include("inc/header.php");
include("inc/menu.php");

?>

<div class="jumbotron">
  <div class="container">
    
    <br><br><br><br>

    <div class="col-lg-4 col-md-4">
      
      <form method="post" enctype="multipart/form-data" id="form_insert">
        <label for="">Selecione um arquivo</label>
        <input type="file" name="arquivo"/><br>
        <input type="submit" name="enviar"/>
      </form>

      <form method="post" enctype="multipart/form-data" id="form_edit" style="display: none;">
        <label for="">Altere sua Imagem</label>
        <input type="hidden" name="id_image" id="id_image" />
        <input type="file" name="arquivo"/><br>
        <input type="submit" name="enviar"/>
        <button id="new" class="btn">NEW IMAGE</button>
      </form>
    </div>

    <div class="col-lg-8 col-md-8">
      <div class="wrapper_table">
        
        <div class="panel panel-default">
          <div class="panel-heading">Images Recorded</div>

          <table class="table">
            <thead id="thead">
                  <tr>
                    <th>ID</th>
                    <th>PICTURE</th>
                    <th>NAME</th>
                    <th>EDIT</th>
                    <th>EXCLUDE</th>
                  </tr>
            </thead>
          </table>
        </div>

        <button id="listar" class="btn">list</button>

      </div>
    </div>

  </div>
</div>

<?php include("inc/footer.php"); ?>
