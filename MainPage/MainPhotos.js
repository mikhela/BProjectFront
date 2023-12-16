fetch('MainPhotos.json')
  .then(response => response.json())
  .then(data => {
    const photos = data.photos;
    const cardImages = document.querySelectorAll('.card__image');
    
    cardImages.forEach((cardImage, index) => {
      // Check if the index exists in the photos array
      if (index < photos.length) {
        const imageUrl = photos[index];
        // Create an image element
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Image ${index + 1}`;
        // Append the image to the card__image element
        cardImage.appendChild(img);

        img.classList.add('Card__image__inner');
      }
    });
  })
  .catch(error => {
    console.log('Error fetching JSON:', error);
  });
