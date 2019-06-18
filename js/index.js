// Your code goes here

// main page selector
const mainPage = document.querySelector('body');

// changes background color of header logo
const h1Logo = document.querySelector('.logo-heading');
h1Logo.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = 'purple';
});
h1Logo.addEventListener('mouseout', (e) => {
  e.target.style.backgroundColor = 'white';
});

// changes fontsize of focused header links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((anchor) => {
  anchor.addEventListener('focus', (e) => {
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
// const annoy = alert('Hey! Put me down!!!');
const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('drag', () => {
    alert('Hey! Put me down!!!')
  });
});