document
	.getElementById("contact-form")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Evitar el envío predeterminado del formulario

		// Aquí obtendrás los valores de los campos del formulario
		const firstName = document.getElementById("firstName").value;
		const lastName = document.getElementById("lastName").value;
		const state = document.getElementById("state").value;
		const zipCode = document.getElementById("zipCode").value;
		const emailAddress = document.getElementById("emailAddress").value;
		const phoneNumber = document.getElementById("phoneNumber").value;
		const insuranceType = document.getElementById("insuranceType").value;

		// Configuración del template params para EmailJS
		const templateParams = {
			firstName: firstName,
			lastName: lastName,
			state: state,
			zipCode: zipCode,
			emailAddress: emailAddress,
			phoneNumber: phoneNumber,
			insuranceType: insuranceType,
		};

		// Enviar email usando EmailJS
		emailjs.send("service_5pf0e4k", "template_ru7s0pn", templateParams).then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
				alert("Sent!");
				document.getElementById("contact-form").reset(); // Limpiar el formulario
			},
			function (error) {
				console.log("FAILED...", error);
				alert("Something wrong happend!");;
			}
		);
	});
