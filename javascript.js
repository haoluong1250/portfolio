// Scroll down hide navbar, scroll up show navbar again
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation-bar").style.top = "1%";
  } else {
    document.getElementById("navigation-bar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
