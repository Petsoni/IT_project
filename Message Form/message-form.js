function clicked() {

	let name = document.getElementById('firstName').value;
	let surname = document.getElementById('Surname').value;
	let email = document.getElementById('email').value;

	console.log(file);

	if (name === "" || surname === "" || email === "" || file === "") {
		alert('Fill out all the necessary fields!!!');
	} else {
		alert('Submitted successfully');
		document.getElementById('name').value = "";
		document.getElementById('surname').value = "";
		document.getElementById('email').value = "";
	}
}

function goBack() {
	window.history.back();
}