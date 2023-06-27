
// SUBMIT BUTTON FUNCTIONS

const submit_modal = document.getElementById('submit');
const modal_container = document.getElementById('modal_container');
const close_modal = document.getElementById('close');
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const select = document.getElementById('select');
const error = document.getElementById('error');

const emailField = document.getElementById('email'),
	emailError = document.getElementById('error-text');

submit_modal.addEventListener('click', () => {
	
	modal_container.classList.add('show'); //show modal	
	document.body.style.overflowY = 'hidden'; //hide vertical scrollbar
	
	// Get name to display in the modal
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;
	document.getElementById('fullname').innerText = fname + " " + lname;
	
	// Clear fields
	inputs.forEach(input => input.value = '');
	textarea.value = '';


});

function validateEmail(){
	
	if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		emailError.innerHTML = "Please enter a valid email.";
		// emailError.style.top = "120%";
		return false;
	}
	emailError.innerHTML = "";
	// emailError.style.top = "120%";
	return true;
}

close_modal.addEventListener('click', () => {
	modal_container.classList.remove('show');
	document.body.style.overflowY = 'scroll';
});

