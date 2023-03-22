AOS.init();

const sliderImage = [ "img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"];

let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
  changeSliderImage();
}, 7000)

const changeSliderImage = () => {
  sliderGridItems.map((gridItem, index) => {
    setTimeout(() => {

      gridItem.classList.remove('hide');

      setTimeout(() => {
        if (index == sliderGridItems.length - 1 ) {
          if (currentImage >= sliderImage.length -1) {
            currentImage = 0;
          }
          else {
            currentImage++
          }

          slider.src = `img/${sliderImage[currentImage]}`;

          sliderGridItems.map((item, i) => {
            setTimeout(() => {
              item.classList.add('hide')
            }, i * 300)
          })
        }
      }, 100);
      
    }, index * 300);
  })
}

// navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  // console.log(scrollY);
  if (scrollY >= 188) {
    navbar.classList.add('bg')
  } else {
    navbar.classList.remove('bg')
  }
})