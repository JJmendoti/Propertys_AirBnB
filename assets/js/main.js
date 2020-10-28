function validateSignup() {

	let type_identification = document.getElementById("type_identification").value;
	let identification = document.getElementById("identification").value;
	let name = document.getElementById("name").value;
	let lastname = document.getElementById("lastname").value;
	let emailsito = document.getElementById("emailsito").value;
	let passwordd = document.getElementById("passwordd").value;
	let valipasswordd = /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z¡@#$%&?¿!]{8,16}$/;


	if (type_identification === "") {
		Swal.fire({
			title: "Error",
			text: "El campo type_identification esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (identification === "") {
		Swal.fire({
			title: "Error",
			text: "El campo identification esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;
	} else if (name === "") {
		Swal.fire({
			title: "Error",
			text: "El campo name esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});

		return false;

	} else if (lastname === "") {
		Swal.fire({
			title: "Error",
			text: "El campo lastname esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (emailsito === "") {
		Swal.fire({
			title: "Error",
			text: "El campo email esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (passwordd === "") {
		Swal.fire({
			title: "Error",
			text: "El campo password esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (!valipasswordd.test(passwordd)) {
		Swal.fire({
			title: "Error",
			text: "El campo password no tiene los carateres requeridos ¡@#$%&?¿!",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;
	}else{
		let alertt = document.getElementById("alertt");
        alertt.style.display = "block";
	}
}




function validateSignIn() {

	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	if (email === "") {
		Swal.fire({
			title: "Error",
			text: "El campo email esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (password === "") {
		Swal.fire({
			title: "Error",
			text: "El campo password esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;
	}else{
		let aleertt = document.getElementById("aleertt");
        aleertt.style.display = "block";
	}
}


function validateproperty() {

	let titlee = document.getElementById("titlee").value;
	let type = document.getElementById("type").value;
	let address = document.getElementById("address").value;
	let rooms = document.getElementById("rooms").value;
	let price = document.getElementById("price").value;
	let area = document.getElementById("area").value;
	let id_user = document.getElementById("id_user").value;

	if (titlee === "") {
		Swal.fire({
			title: "Error",
			text: "El campo title esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (type === "") {
		Swal.fire({
			title: "Error",
			text: "El campo type esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;
	} else if (address === "") {
		Swal.fire({
			title: "Error",
			text: "El campo address esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});

		return false;

	} else if (rooms === "") {
		Swal.fire({
			title: "Error",
			text: "El campo rooms esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (price === "") {
		Swal.fire({
			title: "Error",
			text: "El campo price esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (area === "") {
		Swal.fire({
			title: "Error",
			text: "El campo area esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	} else if (id_user === "") {
		Swal.fire({
			title: "Error",
			text: "El campo id_user esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;

	}

}


function AlertDelet() {

	let actiondelete = confirm("Seguro desea Eliminar el Registro");
	if (actiondelete == true) {
		Swal.fire({
			text: "Has Eliminado el Registro!",
			icon: "success",
			iconColor: "green",
			confirmButtonText: 'Continuar',
			background: '#a9b2b7',
			backdrop: true,
			toast: true,
			position: 'top',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#ff2f2f',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return true;

	} else {

		Swal.fire({
			title: "cancelar",
			text: "Has cancelado la acción de Eliminar!",
			icon: "info",
			iconColor: "blue",
			confirmButtonText: 'Continuar',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'top',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#3fc3ee',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;
	}
}

function validateUsers() {

	let id_userSs = document.getElementById("id_userSs").value;

	if (id_userSs === "") {
		Swal.fire({
			title: "Error",
			text: "El campo id_user esta vacio",
			icon: "error",
			confirmButtonText: 'Continuar',
			footer: '<span class="footer-alert">Esta información es importante</span>',
			background: '#ddd',
			backdrop: true,
			toast: true,
			position: 'center',
			allowOutsideClick: false,
			allowEscapeKey: true,
			allowEnterKey: true,
			stopKeydownPropagation: false,
			showConfirmButton: true,
			confirmButtonColor: '#c20707',
			confirmButtonAriaLabel: 'Continuar',
			buttonsStyling: true,
			showCloseButton: true,
			closeButtonAriaLabel: 'close alert'
		});
		return false;
	}
}
