document.addEventListener('DOMContentLoaded', () => {
    const userEmail = localStorage.getItem('userEmail');
  
    if (userEmail) {
        console.log('User email:', userEmail);
    } else {
        console.log('User email not available');
    }
  
    const logoutIcon = document.querySelector('.Logout');
  
    logoutIcon.addEventListener('click', () => {
        localStorage.removeItem('userEmail');
  
    });
  });