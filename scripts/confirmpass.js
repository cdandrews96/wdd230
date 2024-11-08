const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const message = document.querySelector("#formmessage");

confirm.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password.value !== confirm.value) {
		message.textContent = "⚠️ PASSWORDS DO NOT MATCH!";
		message.style.visibility = "show";
		confirm.style.backgroundColor = "#fff0f3";
		confirm.value = "";
		confirm.focus();
	} else {
		message.style.display = "none";
		confirm.style.backgroundColor = "#fff";
		confirm.confirm.style.color = "#000";
	}
}

// PAGE RATING
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}