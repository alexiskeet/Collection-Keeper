async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(username)
    if (username && email && password) {
      
        const response = await fetch('/api/users/signup', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (response.ok) {
          console.log('success');
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
  }
    
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);