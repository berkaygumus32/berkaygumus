const checkbox = document.getElementById('purple');

checkbox.addEventListener('click', () => {
  document.body.style.background = button.clicked ? "#57837B" : "" ;
});

function scrollTotop() {
  window.scrollTotop({
    top: 0,
    behavior: 'smooth'
  })
}