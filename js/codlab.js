var modal = document.getElementById("modal");
var btn = document.getElementById("btn-ingreso");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("login-form");
var passwordInput = document.getElementById("password");
var passwordError = document.getElementById("password-error");
btn.onclick = function() {
	modal.style.display = "block";
	passwordInput.select();
	passwordInput.focus()
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none"
	}
}
form.addEventListener("submit", function(event) {
	event.preventDefault();
	if (passwordInput.value === "Atentonim0") {
        sessionStorage.setItem('sesCodLab','CodLab');
        //window.open('./index.html', '_blank', 'width=739, height=1040, left=1291, top=0');
        // window.open('./index.html', "_blank", 'width=739, height=1040, left=1291, top=0');
        window.open('./index.html', "_blank");
        modal.style.display = "none";
        window.close()
	} else {
		passwordError.innerHTML = "Contraseña incorrecta.";
	}
});
