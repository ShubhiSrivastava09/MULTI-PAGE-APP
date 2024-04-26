function renderError(message){
	document.getElementById('sign_in_error').innerHTML = message;
}

function submitHandler(e){
	e.preventDefault();
	console.log('hello from custom event handler',e);

	const username = document.getElementById('sign_in_username').value;
	const password = document.getElementById('sign_in_password').value;

	console.log(username,password);

	const authData = JSON.parse(localStorage.getItem('auth')) || [];

	// validate that the user has already registered if not show error
	let userFound = false;
	let password_from_auth = '';
	for (userObj of authData){
			if (userObj.username === username) {
				userFound = true;
				password_from_auth = userObj.password;
			}
	}
	if(!userFound){
		// show error asking user to sign up first
		renderError('username not found.Please sign up first');
		return;
	}
	renderError('');
	// validate that the password entered matches the password stored by us in local storage
	if (password_from_auth != password){
		renderError('incorrect password. Please try again')
	}else{
		renderError('');
		// proceed to home
		location.href = 'home.html'
	}
	

}


const formHTMLEle = document.getElementById('login-form-container-id'); 
formHTMLEle.addEventListener('submit', (e) => submitHandler(e))