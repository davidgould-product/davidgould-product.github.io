// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking
            const navMenu = document.querySelector('.nav-menu');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (navMenu && menuToggle) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// Display last updated timestamp
document.addEventListener('DOMContentLoaded', () => {
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',
            timeZoneName: 'short'
        };
        lastUpdatedElement.textContent = now.toLocaleString('en-US', options);
    }

    // Resume button dialogs (both in Experience section and Contact section)
    const resumeBtn = document.getElementById('resumeBtn');
    const resumeBtn2 = document.getElementById('resumeBtn2');
    
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            alert('Please contact me for my resume. Thank you!');
        });
    }
    
    if (resumeBtn2) {
        resumeBtn2.addEventListener('click', () => {
            alert('Please contact me for my resume. Thank you!');
        });
    }

    // Contact form submission - AJAX to stay on page and show SENT
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent redirect
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const formStatus = document.getElementById('formStatus');
            const formData = new FormData(contactForm);
            
            // Show sending state
            btnText.textContent = 'Sending...';
            submitBtn.disabled = true;
            formStatus.className = 'form-status sending';
            formStatus.textContent = 'Sending your message...';
            
            try {
                // Submit to FormSubmit via AJAX
                const response = await fetch('https://formsubmit.co/davidgouldproduct@gmail.com', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success!
                    btnText.textContent = 'SENT ✓';
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
                    contactForm.reset();
                    
                    // Reset after 5 seconds
                    setTimeout(() => {
                        btnText.textContent = 'Send Message';
                        submitBtn.disabled = false;
                        formStatus.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Failed to send');
                }
            } catch (error) {
                console.error('Error:', error);
                btnText.textContent = 'Send Message';
                submitBtn.disabled = false;
                formStatus.className = 'form-status error';
                formStatus.textContent = '✗ Failed. Please email me at davidgouldproduct@gmail.com';
            }
        });
    }
});
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations on load
window.addEventListener('DOMContentLoaded', () => {
    // Animate elements
    const animatedElements = document.querySelectorAll(
        '.metric, .exp-item, .work-card, .achievement, .patent'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.3s ease ${index * 0.02}s, transform 0.3s ease ${index * 0.02}s`;
        fadeInObserver.observe(el);
    });

    // Parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Removed duplicate form handler - now handled in DOMContentLoaded above

// Add smooth hover effects to work cards
const workCards = document.querySelectorAll('.work-card');
workCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});
