<div class="container">
	<div class="forms-conteiner mt-4">
		<form action="<?php echo base_url() . 'Api/addproperty'; ?>" method="POST" onsubmit="return validateproperty();">
			<h2 class="title">NEW PROPERTY</h2>
			<div class="row">
				<div class="col-md-6">
					<div class="input-field">
						<i class="fas fa-user-check"></i>
						<input type="text" name="" id="" placeholder="Id automatic" readonly />
					</div>
					<div class="input-field">
						<i class="fas fa-file-alt"></i>
						<input type="text" name="title" id="titlee" placeholder="Title">
					</div>
					<div class="input-field">
						<i class="fas fa-home"></i>
						<input type="text" name="type" id="type" list="listtype" placeholder="Type" />
						<datalist id="listtype">
							<option>Casa</option>
							<option>Habitación</option>
							<option>Hostal</option>
						</datalist>
					</div>
					<div class="input-field">
						<i class="fas fa-map-marked-alt"></i>
						<input type="text" name="address" id="address" placeholder="Address" />
					</div>
				</div>
				<div class="col-md-6">
					<div class="input-field">
						<i class="fas fa-user-check"></i>
						<input type="text" name="id_user" id="id_user" placeholder="id_user" />
					</div>
					<div class="input-field">
						<i class="fas fa-door-open"></i>
						<input type="text" name="rooms" id="rooms" placeholder="Rooms" />
					</div>
					<div class="input-field">
						<i class="fas fa-money-bill-wave"></i>
						<input type="text" name="price" id="price" placeholder="Price" />
					</div>

					<div class="input-field">
						<i class="fas fa-mountain"></i>
						<input type="text" name="area" id="area" placeholder="Area" />
					</div>

				</div>

			</div>

			<input type="submit" class="btnn" value="Create" />
		</form>
	</div>

</div>