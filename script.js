// ===================================
// Initialize AOS (Animate On Scroll)
// ===================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ===================================
// Mobile Menu Toggle
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Update Active Nav Link on Scroll
// ===================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Typing Animation for Hero Section
// ===================================
const typingText = document.querySelector('.typing-text');
const roles = [
    'Web Developer',
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next word
    }

    setTimeout(typeRole, typingSpeed);
}

// Start typing animation
typeRole();

// ===================================
// Projects Data
// ===================================
const projects = [
    {
        title: 'AI-Powered Medical Report Analyzer (Medco)',
        description: 'AI-powered web app using OCR + NLP to extract and analyze medical report data. Built with Flask, Python, and modern UI design.',
        image: 'assets/medco.jpg',
        tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'OCR', 'NLP'],
        github: 'https://github.com/Anshyadav4494/Medco-Analyzer',
        demo: '#'  // no live demo
    },
    {
        title: 'Clothing Store E-Commerce',
        description: 'A responsive clothing store landing page with beautiful UI and clean animations, built using HTML, CSS & JavaScript.',
        image: 'assets/clothing-store.jpg',
        tech: ['HTML', 'CSS', 'JavaScript'],
        demo: 'https://anshyadav4494.github.io/clothing_store',
        github: 'https://github.com/Anshyadav4494/clothing_store'
    },
    {
        title: 'IIMT University Landing Page',
        description: 'Designed & built a modern landing page for IIMT University with smooth UI, responsive design, and interactive elements.',
        image: 'assets/iimt.jpg',
        tech: ['HTML', 'CSS', 'JavaScript'],
        demo: 'https://anshyadav4494.github.io/IIMT-LandingPage',
        github: 'https://github.com/Anshyadav4494/IIMT-LandingPage'
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio with animations, responsive sections, and modern layout. Built using HTML, CSS & JavaScript.',
        image: 'assets/portfolio.png',
        tech: ['HTML', 'CSS', 'JavaScript', 'AOS'],
        github: 'https://github.com/Anshyadav4494/Anshyadav4494',
        demo: '#'   // current page
    }
];


// ===================================
// Render Projects Dynamically
// ===================================
const projectsGrid = document.getElementById('projectsGrid');

function renderProjects() {
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', (index * 100).toString());

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22250%22%3E%3Crect width=%22400%22 height=%22250%22 fill=%22%230ea5e9%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2224%22 fill=%22white%22%3E${project.title}%3C/text%3E%3C/svg%3E'">
                <div class="project-overlay">
                    <a href="${project.github}" target="_blank" class="project-link" aria-label="View GitHub">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="${project.demo}" target="_blank" class="project-link" aria-label="View Demo">
                        <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Render projects on page load
renderProjects();

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission (replace with actual backend call)
    setTimeout(() => {
        showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon! 🎉', 'success');
        contactForm.reset();
    }, 1000);
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ===================================
// Download Resume Button
// ===================================
const downloadResumeBtn = document.getElementById('downloadResume');

downloadResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Create a simple alert (replace with actual resume download)
    alert('Resume download feature will be implemented. Please add your resume PDF to the assets folder and update this link!');

    // Uncomment and update this when you have your resume PDF:
    // const link = document.createElement('a');
    // link.href = 'assets/Ansh_Yadav_Resume.pdf';
    // link.download = 'Ansh_Yadav_Resume.pdf';
    // link.click();
});

// ===================================
// Profile Image Placeholder
// ===================================
const profileImage = document.getElementById('profileImage');

// Set a placeholder if image doesn't load
profileImage.onerror = function () {
    this.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%230ea5e9%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2280%22 fill=%22white%22%3EAY%3C/text%3E%3C/svg%3E';
};

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===================================
// Scroll to Top on Page Load
// ===================================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===================================
// Add Parallax Effect to Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
});

// ===================================
// Console Message
// ===================================
console.log('%c👋 Hello! Welcome to my portfolio!', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
console.log('%cLooking for something? Feel free to reach out!', 'color: #3b82f6; font-size: 14px;');
