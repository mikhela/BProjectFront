const data = {
    "photo_url": "../images/Libraryimage.jpg"
};

const photoUrl = data.photo_url;

console.log(photoUrl);

fetch('BookPhto.json')
    .then(response => response.json())
    .then(data => {
        const photoUrl = data.photo_url;

        const image = document.createElement('img');

        image.src = photoUrl;

        image.classList.add('header-image'); // Replace 'header-image' with your desired class name

        const headerLeft = document.getElementById('headerLeft');
        headerLeft.appendChild(image);
    })
    .catch(error => {
        console.log('Error fetching data:', error);
    });
