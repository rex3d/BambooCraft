// Kopiowanie IP
document.getElementById('ipToCopy').addEventListener('click', () => {
  navigator.clipboard.writeText('bamboocraft.icsv.pl');
  alert('Adres IP skopiowany do schowka!');
});

// Przycisk "Na górę"
const topBtn = document.getElementById("myBtn");
window.onscroll = () => {
  topBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Toggle navbar (hamburger menu)
function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// Smooth scroll z jQuery
$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 300);
    }
  });
});