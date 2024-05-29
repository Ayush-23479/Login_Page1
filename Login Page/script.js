document.querySelector('.btn').addEventListener('click', function() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === 'analyst' && password === 'password') {
		window.location.href = 'https://ayush-23479.github.io/Analyst_Portfolio/';
	} else {
		document.getElementById('login-error-msg').classList.add('visible');
	}
});