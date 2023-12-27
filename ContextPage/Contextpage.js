// JavaScript
fetch('ContextPhotos.json')
  .then(response => response.json())
  .then(photos => {
    const smallBoxesContainer = document.getElementById('smallBoxesContainer');

    photos.forEach(photo => {
      const smallBox = document.createElement('div');
      smallBox.className = 'small-box';
      smallBox.onclick = () => handleClick(photo.id); // Call handleClick function with photo id
      smallBox.style.backgroundImage = `url(${photo.imageUrl})`;
      smallBoxesContainer.appendChild(smallBox);
    });

    function handleClick(id) {
      // Implement the logic when a small box is clicked
      // Use the photo id to perform actions, such as displaying corresponding information in the big box
      // Example: fetch book information based on the clicked photo ID and update the big box content
      fetch(`https://localhost:7223/api/books/${id}`)
        .then(response => response.json())
        .then(book => {
          // Update content in the big box based on the fetched book information
          document.getElementById('bigBox').innerHTML = `
            <h1>${book.title}</h1>
            <p>${book.authorName} ${book.authorSurname}</p>
            <p class="contentofstory">${book.contentOfStory}</p>
          `;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
