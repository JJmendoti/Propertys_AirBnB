<div class="container">
    <div class="forms-conteiner mt-3">
        <form action="<?php echo base_url() . 'api/updateProperty'; ?>" method="POST" onsubmit="return validateproperty();">
            <h2 class="title">UPDATE PROPERTY</h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="input-field">
                        <i class="fas fa-list-ol"></i>
                        <input type="text" value="<?php echo $_GET['id'] ?>" name="id" id="ide" placeholder="id" readonly>
                    </div>
                    <div class="input-field">
                        <i class="fas fa-file-alt"></i>
                        <input type="text" value="<?php echo $property[0]->title ?>" name="title" id="titlee" placeholder="Title">
                    </div>
                    <div class="input-field">
                        <i class="fas fa-home"></i>
                        <input type="text" value="<?php echo $property[0]->type ?>" name="type" id="type" list="listtype" placeholder="Type" />
                        <datalist id="listtype">
                            <option>Casa</option>
                            <option>Habitación</option>
                            <option>Hostal</option>
                        </datalist>
                    </div>
                    <div class="input-field">
                        <i class="fas fa-map-marked-alt"></i>
                        <input type="text" value="<?php echo $property[0]->address ?>" name="address" id="address" placeholder="Address" />
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="input-field">
                        <i class="fas fa-user-check"></i>
                        <input type="text" value="<?php echo $property[0]->id_user ?>" name="id_user" id="id_user" placeholder="id_user" readonly />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-door-open"></i>
                        <input type="text" value="<?php echo $property[0]->rooms ?>" name="rooms" id="rooms" placeholder="Rooms" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-money-bill-wave"></i>
                        <input type="text" value="<?php echo $property[0]->price ?>" name="price" id="price" placeholder="Price" />
                    </div>

                    <div class="input-field">
                        <i class="fas fa-mountain"></i>
                        <input type="text" value="<?php echo $property[0]->area ?>" name="area" id="area" placeholder="Area" />
                    </div>
                </div>

            </div>

            <input type="submit" class="btnn" value="Update" />
        </form>


    </div>
</div>
</div>