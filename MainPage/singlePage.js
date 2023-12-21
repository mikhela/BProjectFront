// Get card details from query parameters
const queryParams = new URLSearchParams(window.location.search);
const cardNumber = queryParams.get('cardContainer__card');

// Function to set and display card details
function setCardDetails(imgSrc, title, content) {
  // Set details in localStorage
  localStorage.setItem('imgSrc', imgSrc);
  localStorage.setItem('title', title);
  localStorage.setItem('content', content);

  // Update content on the same page
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <div>
      <img src="${imgSrc}" alt="Card Image" />
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
  `;
}

// Fetch and display card details based on cardNumber
let imgSrc, title, content;

// For demonstration purposes, assigning sample content based on cardNumber
if (cardNumber === '1') {
  imgSrc = 'path_to_image_1.jpg';
  title = 'Card 1 Title';
  content = 'Content for Card 1';
} else if (cardNumber === '2') {
  imgSrc = 'path_to_image_2.jpg';
  title = 'Card 2 Title';
  content = 'Content for Card 2';
}
else if (cardNumber === '3') {
    imgSrc = 'path_to_image_2.jpg';
    title = 'Card 2 Title';
    content = 'Content for Card 2';
  }
else if (cardNumber === '4') {
    imgSrc = 'path_to_image_2.jpg';
    title = 'Card 2 Title';
    content = 'Content for Card 2';
  }
  else if (cardNumber === '5') {
    imgSrc = 'path_to_image_2.jpg';
    title = 'Card 2 Title';
    content = 'Content for Card 2';
  }
  else if (cardNumber === '6') {
    imgSrc = 'path_to_image_2.jpg';
    title = 'Card 2 Title';
    content = 'Content for Card 2';
  }
// Add more conditions for additional cards

// Set and display card details
setCardDetails(imgSrc, title, content);
