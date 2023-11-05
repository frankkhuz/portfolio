const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active')
navMenu.classList.toggle('active')
})
document.querySelectorAll(".navMenu").forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
})); 

themeToggleBtn = document.querySelector('.toggleDarkMode');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
});