const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active from all
    navLinks.forEach(item => item.classList.remove("active"));
    
    // add active to clicked one
    link.classList.add("active");
  });
});

// ===== NEW: SCROLL DETECTION FOR NAVIGATION =====
const sections = document.querySelectorAll("section[id]");

function updateActiveNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // offset for fixed nav
        const sectionId = section.getAttribute("id");
        
        // Check if current scroll position is within this section
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove active from all links
            navLinks.forEach(link => link.classList.remove("active"));
            
            // Add active to the link that matches this section
            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

// Listen to scroll events
window.addEventListener("scroll", updateActiveNavOnScroll);

// Call once on page load to set initial active state
updateActiveNavOnScroll();

// ===== SCROLL ANIMATION FOR ALL SECTIONS =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Hero Section Elements
document.querySelectorAll('.hero-content h3, .hero-content h1, .hero-content h2, .hero-content p').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.social-icon').forEach(icon => {
    observer.observe(icon);
});

const heroImage = document.querySelector('.hero-image');
if (heroImage) observer.observe(heroImage);

// About Section
const aboutTitle = document.querySelector('.about .section-title');
if (aboutTitle) observer.observe(aboutTitle);

const aboutContent = document.querySelector('.about-content');
if (aboutContent) observer.observe(aboutContent);

// Skills Section
const skillsTitle = document.querySelector('.skills .section-title');
if (skillsTitle) observer.observe(skillsTitle);

document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

// Projects Section
const projectsTitle = document.querySelector('.projects .section-title');
if (projectsTitle) observer.observe(projectsTitle);

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});