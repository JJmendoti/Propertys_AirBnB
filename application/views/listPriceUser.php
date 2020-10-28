<div class="container">
    <div class="forms-conteiner mt-4">
        <form action="<?php echo base_url() . 'Property/getdUsers'; ?>" method="GET" onsubmit="return validateUsers();">
            <h2 class="title">Searc Id Users</h2>
            <div class="row">

                <div class="input-field">
                    <i class="fas fa-user-check"></i>
                    <input type="text" name="id_user" id="id_userSs" placeholder="id_user" />
                </div>
            </div>
            <input type="submit" class="btnn" value="Search" />
        </form>
    </div>
</div>