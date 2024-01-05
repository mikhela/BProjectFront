document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
        EmailAddress: email,
        Password: password
    };

    try {
        const response = await fetch('https://localhost:7223/api/Users/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.text(); // Read the response as text if it's not JSON
            console.log('Registration successful:', result);
            alert('Registration successful');
            
            localStorage.setItem('userEmail', email);

            window.location.href = '../MainPage/MainPage.html';
        } else {
            throw new Error('Registration failed');
        }
    } catch (error) {
        console.error('Registration error:', error.message);
        alert('Registration failed');
    }
});
