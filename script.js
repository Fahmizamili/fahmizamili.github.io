const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach(item => item.classList.remove("active"));
    
    // add active to clicked one
    link.classList.add("active");
  });
});