AOS.init({
  duration: 800,
  once: true
});



AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});


window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("main-content");

  preloader.style.display = "none";
  content.style.display = "block";
});

