

// heart icon



const heartIcons = document.querySelectorAll('#Heart');

heartIcons.forEach((heartIcon, index) => {
  heartIcon.addEventListener('click', function() {
    if (heartIcon.classList.contains('clicked')) {
      heartIcon.style.color = '';
      heartIcon.classList.remove('clicked');
      localStorage.removeItem(`heartColor-${index}`); // Remove color from storage
    } else {
      heartIcon.style.color = 'red';
      heartIcon.classList.add('clicked');
      localStorage.setItem(`heartColor-${index}`, 'red'); // Store color in localStorage
    }
  });

  // Check and apply stored color
  const storedColor = localStorage.getItem(`heartColor-${index}`);
  if (storedColor) {
    heartIcon.style.color = storedColor;
    heartIcon.classList.add('clicked');
  }
});


// Cards functional


