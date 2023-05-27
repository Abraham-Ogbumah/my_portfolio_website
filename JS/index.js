let i = 0;

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

let element = document.getElementById("intro-name");
let text = element.innerHTML;
element.innerHTML = ''; // clear the existing text

function typeWriter() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 75); // Adjust the typing speed by changing the value inside setTimeout
  }
}

typeWriter();