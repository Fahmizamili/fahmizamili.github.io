const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    
    navLinks.forEach(item => item.classList.remove("active"));
    
    
    link.classList.add("active");
  });
});


const sections = document.querySelectorAll("section[id]");

function updateActiveNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // offset for fixed nav
        const sectionId = section.getAttribute("id");
        
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            
            navLinks.forEach(link => link.classList.remove("active"));
            
            
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}


window.addEventListener("scroll", updateActiveNavOnScroll);


updateActiveNavOnScroll();


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});


document.querySelectorAll('.hero-content h3, .hero-content h1, .hero-content h2, .hero-content p').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.social-icon').forEach(icon => {
    observer.observe(icon);
});

const heroImage = document.querySelector('.hero-image');
if (heroImage) observer.observe(heroImage);


const aboutTitle = document.querySelector('.about .section-title');
if (aboutTitle) observer.observe(aboutTitle);

const aboutContent = document.querySelector('.about-content');
if (aboutContent) observer.observe(aboutContent);


const skillsTitle = document.querySelector('.skills .section-title');
if (skillsTitle) observer.observe(skillsTitle);

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});


const projectsTitle = document.querySelector('.projects .section-title');
if (projectsTitle) observer.observe(projectsTitle);

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});


