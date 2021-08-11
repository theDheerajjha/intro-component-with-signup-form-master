document.querySelector("button").addEventListener("click", displayError);



function displayError(e) {


e.preventDefault();


	var fname = document.querySelector(".fname").value;
	var lname = document.querySelector(".lname").value;
	var pwd = document.querySelector(".pwd").value;
	var email = document.querySelector(".email").value;
	// var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (fname == "") {
		document.querySelector(".fname").placeholder = "";
		document.querySelector(".text-one").innerHTML = "First Name cannot be empty";
		document.querySelector(".fname").className = "error-image";
	}

	if (lname === "") {
		document.querySelector(".lname").placeholder = "";
		document.querySelector(".text-two").innerHTML = "Last Name cannot be empty";
		document.querySelector(".lname").className = "error-image";
	}

	if (email === "") {
		document.querySelector(".email").placeholder = "email@example/com";
		document.querySelector(".text-three").innerHTML = "Looks like this is not an email";
		document.querySelector(".email").className = "error-image";
	}

	if (pwd === "") {
		document.querySelector(".pwd").placeholder = "";
		document.querySelector(".text-four").innerHTML = "Password cannot be empty";
		document.querySelector(".pwd").className = "error-image";
	}

  return false;
}