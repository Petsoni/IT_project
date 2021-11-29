var el = document.getElementById('file-upload');
el.onchange = function sub() {
	let path = document.getElementById('file-upload').value;
	document.getElementById('path').innerHTML = path;
}


function clicked() {

	let name = document.getElementById('name').value;
	let surname = document.getElementById('surname').value;
	let email = document.getElementById('email').value;
	let file = document.getElementById('file-upload').value;

	console.log(file);

	if (name === "" || surname === "" || email === "" || file === "") {
		alert('Fill out all the necessary fields!!!');
	} else {
		alert('Submitted successfully');
		document.getElementById('name').value = "";
		document.getElementById('surname').value = "";
		document.getElementById('email').value = "";
		document.getElementById('path').innerHTML = "";
	}
}

function goBack() {
	window.history.back();
}