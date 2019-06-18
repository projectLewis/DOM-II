// Your code goes here

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