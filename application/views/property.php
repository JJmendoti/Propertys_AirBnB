<div class="container mt-3">
    <div class="row">
        <div class="col-sm-4 col-md-4 bg-light">
            <h2>LISTA DE PROPIEDADES</h2>
        </div>
        <div class="col">
            <a href="<?php echo base_url() . 'Property/addPropertys'; ?>" type="button" id="boton" class="btn btn-outline-primary ml-5 mr-5">ADD PROPERTY</a>
            <a href="<?php echo base_url() . 'Property/getProperty'; ?>" type="button" id="boton" class="btn btn-outline-info mr-5 ml-5">getProperty</a>
            <a href="<?php echo base_url() . 'Property/listPriceUser'; ?>" type="button" id="boton" class="btn btn-outline-dark mr-5 ml-5">getdUser</a>
        </div>
    </div>
</div>
<div class="container fondo-propiedades mt-3 mb-3">
    <div class='row mt-3'>
        <?php
        foreach ($properties as $property) {
            //se pinta registros obtenidos de la tabla 
            $template = "
                <div class = 'col-12 col-md-4'>  
                    <div class='card mt-2' style='width: 22rem;'>                    
                        <div class='card-body text-center'>
                            <h5 class = 'card-title'><strong>{$property->title}</strong></h5>
                            <img src='assets/images/house1.jpeg' class='card-img' width='100' height='200' class='card-img-top' alt='...'>
                            <p class='card-text mt-2'><strong>Tipo de propiedad: </strong>{$property->type}</p>

                            <p class='card-text mt-2'><strong>Direccion: </strong>{$property->address}</p>
                            <p class='card-text'><strong>N° de habitaciones: </strong>{$property->rooms}</p>
                            <p class='card-text'><strong>Precio: $</strong>{$property->price}</p>
                            <p class='card-text'><strong>Area: </strong>{$property->area}</p>
                            <p class='card-text'><strong>id: </strong>{$property->id}</p>
                            <p class='card-text'><strong>id user: </strong>{$property->id_user}</p>
                            <hr>
                            <a href= 'http://localhost/ProgramacionWeb2/Propertys_AirBnB/Api/deleteProperty?id={$property->id}'card-link' class='btn btn-danger mr-5' onclick='return  AlertDelet()' >DELETE</a>
                            <a href= 'http://localhost/ProgramacionWeb2/Propertys_AirBnB/Property/updateProperty?id={$property->id}'card-link' class='btn btn-success ml-5'>UPDATE</a>
                        </div>
                    </div>
                </div>";
            echo $template;
        }
        ?>
    </div>
</div>