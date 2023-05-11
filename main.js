


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;

function showNextImage() {
  // Hide the current image
  images[currentImageIndex].style.opacity = 0;
  images[currentImageIndex + 3].style.opacity = 0;
  
  // Increment the index and wrap around if necessary
  currentImageIndex = (currentImageIndex + 1) % (images.length / 2);
  
  // Show the next image
  images[currentImageIndex].style.opacity = 1;
  images[currentImageIndex + 3].style.opacity = 1;
}

// Show the first image immediately
images[currentImageIndex].style.opacity = 1;
images[currentImageIndex + 3].style.opacity = 1;


// Show the next image every 5 seconds
setInterval(showNextImage, 5000);
  });