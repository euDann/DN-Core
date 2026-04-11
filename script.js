function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - 70) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener('scroll', reveal);
// Executa ao carregar a página também
reveal();