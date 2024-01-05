const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        EmailAddress: email,
        Password: password
    };

    try {
        const response = await fetch('https://localhost:7223/api/Users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            // Handle error message display or other actions
            alert(errorMessage);
            return;
        }

        localStorage.setItem('userEmail', email);

        window.location.href = '../MainPage/MainPage.html'; // Replace with your desired path
    } catch (error) {
        console.error('Error:', error);

    }
});
