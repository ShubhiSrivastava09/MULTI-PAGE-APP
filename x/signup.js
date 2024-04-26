function renderError(message){
	document.getElementById('signup_error').innerHTML = message;
}

function submitHandler(e){
	e.preventDefault();
	console.log('hello from custom event handler',e);

	const username = document.getElementById('sign_up_username').value;
	const password = document.getElementById('sign_up_password').value;
	const confirm_password = document.getElementById('sign_up_confirm_password').value;
	const user_image = document.getElementById('sign_up_user_image').value;
	console.log(username,password,confirm_password);

	// validate that password and confirm_password , if they dont match show error

	if (password != confirm_password){
		renderError('passwords do not match');
	}else{
		renderError('');
		let authData = JSON.parse(localStorage.getItem('auth')) || [];
		let userFound = false;
		for (userObj of authData){
			if (userObj.username === username){
				renderError('username already exists. Please signin instead');
				userFound = true;
				location.href = 'index.html';
			}
		}
		// register the user
		if(!userFound) {
				const userDetails = {
						'username' : username,
						'password' : password
				};
				authData.push(userDetails);
				localStorage.setItem('auth',JSON.stringify(authData));
				// proceed to sign in
				location.href = 'index.html'
		}
	}

}


const formHTMLEle = document.getElementById('signup-form-container-id'); 
formHTMLEle.addEventListener('submit', (e) => submitHandler(e))