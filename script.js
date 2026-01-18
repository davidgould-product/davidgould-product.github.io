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
}

// All DOMContentLoaded code in ONE block
document.addEventListener('DOMContentLoaded', () => {
    // Display last updated timestamp
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

    // Resume button dialogs
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

    // Contact form
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const btnText = document.getElementById('btnText');
            const formStatus = document.getElementById('formStatus');
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;
            
            if (!name || !email || !message) {
                formStatus.className = 'form-status error';
                formStatus.textContent = '✗ Please fill all fields';
                return false;
            }
            
            btnText.textContent = 'Sending...';
            submitBtn.disabled = true;
            formStatus.className = 'form-status sending';
            formStatus.textContent = 'Sending your message...';
            
            try {
                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('message', message);
                formData.append('access_key', '1e7ba58c-a7b8-475c-b9a9-c971671e7f1b');
                formData.append('subject', 'Gould Website - New Contact Message');
                
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    btnText.textContent = 'SENT ✓';
                    formStatus.className = 'form-status success';
                    formStatus.textContent = '✓ Message sent! I\'ll get back to you soon.';
                    
                    document.getElementById('contactName').value = '';
                    document.getElementById('contactEmail').value = '';
                    document.getElementById('contactMessage').value = '';
                    
                    setTimeout(() => {
                        btnText.textContent = 'Send Message';
                        submitBtn.disabled = false;
                        formStatus.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error(result.message || 'Failed to send');
                }
            } catch (error) {
                console.error('Error:', error);
                btnText.textContent = 'Send Message';
                submitBtn.disabled = false;
                formStatus.className = 'form-status error';
                formStatus.textContent = '✗ Failed. Please email me at davidgouldproduct@gmail.com';
            }
            
            return false;
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
