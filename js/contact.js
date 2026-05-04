(function () {
	var form = document.getElementById("contact-form");

	if (!form) {
		return;
	}

	var recipientEmail = "flash.lavon@hotmail.com";

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		var email = form.elements.email.value.trim();
		var firstName = form.elements.Fname.value.trim();
		var lastName = form.elements.Lname.value.trim();
		var subject = form.elements.subject.value.trim();
		var message = form.elements.message.value.trim();
		var senderName = (firstName + " " + lastName).trim();
		var body = [
			"Nama: " + senderName,
			"Email: " + email,
			"",
			message
		].join("\n");

		window.location.href =
			"mailto:" + encodeURIComponent(recipientEmail) +
			"?subject=" + encodeURIComponent(subject) +
			"&body=" + encodeURIComponent(body);
	});
}());
