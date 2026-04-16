// Select DOM Elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const allNavLinks = document.querySelectorAll('.nav-links a');

// Toggle mobile menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active classes to close the menu
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Optional: Add a simple fade-in effect when scrolling (Intersection Observer)
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Apply initial hidden styles and observe sections
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});