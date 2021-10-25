let menutoggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");

menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

let nav = document.querySelector(".nav");
window.onscroll = function () {
  nav.classList.add("active");
};
