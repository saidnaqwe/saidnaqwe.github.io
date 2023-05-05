const images = [
    "/images/gallery1.jpg",
    "/images/gallery3.jpg",
    "/images/gallery2.jpg",
    
  ];
  
  let currentImageIndex = 0;
  
  function showCurrentImage() {
    const image = document.getElementById("slideshow-image");
    image.src = images[currentImageIndex];
  }
  
  function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    showCurrentImage();
  }
  
  setInterval(showNextImage, 1000);
  