// Your code goes here

// main page selector
const mainPage = document.querySelector('body');
// navbar selector
const navbar = document.querySelector('.main-navigation');
navbar.addEventListener('mouseover', () => {
  navbar.style.backgroundColor = 'yellow';
});
navbar.addEventListener('mouseout', (e) => {
  navbar.style.backgroundColor = 'white';

});

// changes background color of header logo
const h1Logo = document.querySelector('.logo-heading');
h1Logo.addEventListener('mouseover', (e) => {
  navbar.style.backgroundColor = 'purple';
  e.stopPropagation();
});
h1Logo.addEventListener('mouseout', (e) => {
  navbar.style.backgroundColor = 'white';
  e.stopPropagation();
});

// changes fontsize of focused header links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((anchor) => {
  anchor.addEventListener('focus', (e) => {
    e.preventDefault();
    e.target.style.fontSize = '2.0rem';
  })
});
navLinks.forEach((anchor) => {
  anchor.addEventListener('blur', (e) => {
    e.target.style.fontSize = '1.6rem';
  })
});

// changes page background color on double click
const busImg = document.querySelector('.intro img');
let bgChanged = false;
busImg.addEventListener('dblclick', () => {
  if (bgChanged === false) {
    mainPage.style.backgroundColor = "navy";
    return bgChanged = true;
  }
  mainPage.style.backgroundColor = "";
  bgChanged = false;
});

// Yells at you when you drag an image
const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('drag', () => {
    alert('Hey! Put me down!!!')
  });
});

// randomly changes background color on keydown, resets it on keyup
let h2 = document.querySelector('.intro h2');
let h2Content = document.querySelector('.intro h2').textContent;
window.addEventListener('keydown', () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  mainPage.style.backgroundColor = ('rgb(' + r + ',' + g + ',' + b + ')');
  h2.textContent = "RAINBOWS!!!";
  h2.style.fontSize = "6rem"
});
window.addEventListener('keyup', () => {
  mainPage.style.backgroundColor = "";
  h2.textContent = h2Content;
  h2.style.fontSize = "4rem"
});

// changes font color on mouseenter & mouse leave
const paragraphText = document.querySelectorAll('p');
paragraphText.forEach((text) => {
  text.addEventListener('mouseenter', (e) => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.target.style.color = ('rgb(' + r + ',' + g + ',' + b + ')');
  });
});
paragraphText.forEach((text) => {
  text.addEventListener('mouseleave', (e) => {
    e.target.style.color = 'black'
  });
});