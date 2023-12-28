document.addEventListener('DOMContentLoaded', () => {
    fetch('https://localhost:7223/api/about/1') // Replace 'your_backend_endpoint_url' with your actual endpoint
      .then(response => response.json())
      .then(data => {
        const nameElement = document.getElementById('name');
        const aboutElement = document.getElementById('about');
  
        const fullName = `${data.name} ${data.surname}`; // Combining Name and Surname
  
        nameElement.textContent = fullName;
        aboutElement.textContent = data.aboutmyself; // Assuming the JSON response has an 'aboutmyself' field
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  

  //carousel

  let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slides img');

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';

  
}
