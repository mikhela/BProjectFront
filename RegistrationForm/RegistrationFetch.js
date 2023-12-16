let SendInfo = document.querySelector(".SendInfo");
let EmailValue = document.querySelector("#EmailValue");
let PasswordValue = document.querySelector("#PasswordValue");

function Registration(email, password) {
    const body = {
        "EmailAddress": email,
        "Password": password,
    };

    fetch('https://localhost:7223/api/Users/register', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('User added successfully');
    })
    .catch(error => console.error('Error:', error));
}

SendInfo.addEventListener('click', function () {
    Registration(EmailValue, PasswordValue);
});