// get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

// opcional parameters being set for Intersectionalobserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};


//firts check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
// Loop through each img an check status and load if nessesary
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else { //just Load all images if not supported
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}